NAVIGATOR V7A Data Pack

Included
- data/standing_rules.json
- data/forms.json
- data/programmes.json
- data/graduation_rules.json
- api/chat.js (starter integration stub)

How to use
1. Copy the data folder into your NAVIGATOR repo root.
2. Replace or update api/chat.js with your V7A implementation.
3. Use the JSON files as the handbook-grounded data layer.

Recommended implementation order
1. Standing mode
2. Form mode
3. Programme mode
4. Graduation mode
5. Transcript bridge mode

Important notes
- Some programmes are partial in V7A. Where required_total_credits is null, do not declare final graduation eligibility.
- Do not declare academic dismissal from CGPA alone unless consecutive semester history is known.
- Final official confirmation should still come from the Faculty Academic Office / Registrar where applicable.
