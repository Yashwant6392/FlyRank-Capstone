# AI Workflow Comparison (FE-03)

## Feature
The project includes a Settings Form feature implemented in `feature/settings.html`, `feature/style.css`, and `feature/script.js`. The form captures Full Name, Email, Password, Confirm Password, Theme selection, and Receive Notifications. It also includes client-side validation and user feedback to support a better front-end experience.

## Round 1 – Vague Prompt
Round 1 began with a minimal prompt describing a simple settings form. The AI generated a working form with the required fields and a basic save action. What worked: the form structure was present, labels were included, and the UI functioned at a basic level.

Limitations included insufficient validation, no disabled submit state, weak accessibility support, and a basic UI that relied on default browser styling. The original implementation did not use semantic or responsive styling consistently, and it required manual review to ensure a production-ready experience.

## Round 2 – Detailed Prompt
Round 2 used a detailed prompt with explicit project constraints, field validation rules, accessibility requirements, responsive design expectations, and edge-case scenarios. With this guidance, the AI produced a significantly improved form.

The Round 2 implementation added a professional card layout, clear focus states, and improved typography. It incorporated inline validation for each field, including trimmed input handling for Full Name and email, password length requirements, and confirm-password matching. The form now disables the Save button until validation passes, displays a loading state while saving, and presents a success message after completion.

Accessibility improvements included proper `label`/`for` associations, `aria-invalid`, `aria-describedby`, and keyboard-friendly focus outlines. Responsive styling was added so the form remains centered and usable on desktop, tablet, and mobile.

## Comparison

| Category | Round 1 | Round 2 |
|---|---|---|
| Prompt Quality | Vague one-line prompt | Detailed, structured prompt |
| Correctness | Basic working form | Stronger validation and UX |
| Validation | Minimal | Full field validation |
| Accessibility | Limited | Improved ARIA and labels |
| Responsive Design | Basic | Responsive card layout |
| Code Organization | Simple script | Modular validation functions |
| Edge Cases | Not covered | Handled explicitly |
| Review Effort | High | Lower after refinement |

## AI Mistake I Caught
During validation review, I identified a missing helper issue in the Round 2 script: the validation flow attempted to call a non-existent `showError` function due to a naming mismatch. This was corrected by updating the validation helper and ensuring the error display logic used the intended `showError` implementation, preventing runtime failures.

## Lessons Learned
This exercise demonstrated that AI output quality depends strongly on prompt clarity and scope. A detailed prompt leads to better structure, clearer validation, and higher accessibility coverage. It also highlighted the importance of review: even improved AI-generated code can contain logic or integration bugs, so manual validation and targeted fixes remain essential for production readiness.
