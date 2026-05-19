<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI Clone / Migration Rules

This project is a React rebuild of an existing live website.

Codex must not guess UI styles. Codex must inspect, measure, document, then implement.

## Main workflow

For every UI task:

1. Open the live website using Playwright.
2. Open the local React page using Playwright.
3. Inspect the target section on the live website.
4. Extract computed styles from the live website:
   - font-family
   - font-size
   - font-weight
   - line-height
   - letter-spacing
   - color
   - background-color
   - width
   - height
   - padding
   - margin
   - border-radius
   - box-shadow
   - display
   - position
   - gap
   - grid/flex settings
   - image size
   - container max-width
5. Write those measured values into `docs/ui-measurements.md`.
6. Create a mini implementation prompt for itself inside `docs/ui-task-prompt.md`.
7. Implement only the measured values.
8. Take screenshots of live and local pages.
9. Compare screenshots.
10. Fix only the differences.
11. Do not redesign.
12. Do not change already approved sections.

## Strict rules

- Do not invent styles.
- Do not improve the design.
- Do not change original layout unless the live site uses that layout.
- Do not change unrelated files.
- Do not modify approved sections.
- Prefer exact computed styles from the live website.
- If something is unknown, inspect it instead of guessing.
- Make small CSS changes.
- Keep original React structure unless structure is the reason for mismatch.

## Output required after every task

Codex must report:

1. Target section worked on
2. Live page inspected
3. Local page inspected
4. Files changed
5. Measured styles collected
6. Screenshot comparison result
7. Remaining UI differences, if any