# Synthetic issue-audit fixture

This is a deterministic, dependency-free project for diagnosis-only agent testing.

Run `npm test` from this directory. The test intentionally fails with
`SUMMARY_TOO_SHORT` because `fixture.json` contains a short sample summary.
The test reads one local JSON file, prints the failure, and exits 2. It does
not install packages, write files, or make network requests.

A human correction would be to lengthen the synthetic `summary` in
`fixture.json`; do not change it during a diagnosis-only task.
