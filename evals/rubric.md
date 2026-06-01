# Evaluation Rubric

Score reviews against the hidden answer key.

## Metrics

```txt
recall = expected issues found / total expected issues
false-positive rate = unsupported findings / total reported findings
```

Initial targets:

| Metric | Target |
| --- | ---: |
| Real issue recall | >= 80% |
| False-positive rate | <= 15% |
| Correct severity | >= 75% |
| Findings with precise locations | >= 90% |
| Findings with actionable fixes | >= 90% |

## Finding Score

| Review behavior | Score |
| --- | ---: |
| Finds an expected issue | +2 |
| Uses the expected severity | +1 |
| Identifies the file, component, or expression | +1 |
| Explains user or production impact | +1 |
| Provides a workable fix | +1 |
| Reports an unsupported issue | -2 |
| Gives vague advice without evidence | -1 |

Compare baseline and skill results by category. The skill should improve recall
and fix quality without increasing unsupported findings.
