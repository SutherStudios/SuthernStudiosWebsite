/**
 * Form submission — progressive enhancement.
 *
 * Every form marked `data-form` already works without this script: it's a
 * plain HTML POST to the provider, which renders its own thank-you page. This
 * upgrades that to an inline submit so the visitor never leaves the site, and
 * adds loading / success / error states.
 *
 * Handles Formspree and Web3Forms with one code path — both accept a POST of
 * FormData and return JSON when asked, and both signal success with a 2xx.
 */

const SUBMITTING_LABEL = 'Transmitting…';

export function initForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('form[data-form]');
  forms.forEach(enhance);
}

function enhance(form: HTMLFormElement): void {
  // No action attribute = no endpoint configured. Leave the disabled markup
  // exactly as rendered rather than wiring a submit that posts nowhere.
  if (!form.getAttribute('action')) return;

  // Each component that renders a form calls initForms(), so a page holding
  // two of them would otherwise bind two listeners and POST twice.
  if (form.dataset.formEnhanced) return;
  form.dataset.formEnhanced = 'true';

  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const success = form.querySelector<HTMLElement>('[data-form-success]');
  const fields = form.querySelector<HTMLElement>('[data-form-fields]');
  const submit = form.querySelector<HTMLButtonElement>('[data-form-submit]');
  const submitLabel = submit?.querySelector('span');
  const originalLabel = submitLabel?.textContent ?? '';

  form.addEventListener('submit', async (event) => {
    // Native validation runs before this fires, so anything reaching here is
    // already valid per the input constraints.
    event.preventDefault();

    setBusy(true);
    setStatus('');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        onSuccess();
      } else {
        setStatus(await extractError(response), 'error');
        setBusy(false);
      }
    } catch {
      // Network failure, offline, blocked by an extension — all land here.
      setStatus('Could not reach the server. Check your connection and try again.', 'error');
      setBusy(false);
    }
  });

  function onSuccess(): void {
    form.reset();

    if (success && fields) {
      // Swap the fields out for the success panel and move focus to it, so
      // screen-reader and keyboard users land on the confirmation.
      fields.hidden = true;
      success.hidden = false;
      success.focus();
    } else {
      setStatus('Sent. Thanks — we’ll be in touch.', 'success');
    }

    setBusy(false);
  }

  function setBusy(busy: boolean): void {
    if (submit) {
      submit.disabled = busy;
      if (submitLabel) submitLabel.textContent = busy ? SUBMITTING_LABEL : originalLabel;
    }
    form.setAttribute('aria-busy', String(busy));
  }

  function setStatus(message: string, tone?: 'error' | 'success'): void {
    if (!status) return;
    status.textContent = message;
    status.hidden = message.length === 0;
    status.dataset.tone = tone ?? '';
  }
}

/** Pull a human-readable message out of whatever shape the provider returned. */
async function extractError(response: Response): Promise<string> {
  try {
    const data = await response.json();

    // Formspree: { errors: [{ message, field }] }
    if (Array.isArray(data?.errors) && data.errors.length > 0) {
      return String(data.errors[0].message ?? 'Something went wrong.');
    }

    // Web3Forms: { success: false, message }
    if (typeof data?.message === 'string') return data.message;
  } catch {
    // Non-JSON response — fall through to the generic message.
  }

  return response.status === 429
    ? 'Too many attempts. Give it a minute and try again.'
    : 'Something went wrong. Please try again, or email us directly.';
}
