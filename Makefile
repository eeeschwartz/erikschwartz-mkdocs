copy-form:
	cp docs/includes/convertkit-form.html overrides/includes/convertkit-form.html

serve: copy-form
	mkdocs serve

build: copy-form
	mkdocs build --strict