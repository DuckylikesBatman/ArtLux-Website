/* Shared submission state. Keep the user's entries after a failed request. */
window.ArtLuxEnquiry = {
  validate(fields) {
    for (const field of fields) {
      if (field.required && ['text', 'textarea'].includes(field.type)) {
        field.setCustomValidity(field.value.trim() ? '' : ArtLuxLang.t('form.required'));
      }
      field.setAttribute('aria-invalid', String(!field.validity.valid));
    }
    return fields.find(field => !field.validity.valid);
  },
  clear(field) {
    field.setCustomValidity('');
    field.removeAttribute('aria-invalid');
  },
  async send(form, data) {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(35000)
    });
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      if (response.status === 429) return 'form.rate';
      if (body.errors?.some(error => error.code === 'NO_FILE_UPLOADS')) return 'form.noUploads';
      return 'form.error';
    }
    return '';
  }
};
