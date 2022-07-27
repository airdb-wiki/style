# Defensive Programming 

## Reference
http://teaching.csse.uwa.edu.au/units/CITS1001/handouts/L14-defensive-programming.pdf

## Rules on how to employ Defensive Programming in your codebase:

1. Protect your code from invalid data coming from outside, wherever you decide outside is. External systems, files, or any call from outside of the module/component. Establish “trust boundaries” — everything outside of the boundary is dangerous, everything inside of the boundary is safe. In the barricade code, validate all input data.

2. After you have checked for bad data, decide how to handle it. **Defensive Programming is NOT about swallowing errors or hiding bugs.** Choose a strategy to deal with bad data: return an error and stop right away (fast fail), return a neutral value, substitute data values… Make sure that the strategy is clear and consistent.


3. Don’t assume that a function call or method call outside of your code will work as advertised. Make sure that you understand and test error handling around external APIs and libraries.

4. Use assertions to document assumptions and to highlight “impossible” conditions. This is especially important in large systems that have been maintained by different people over time, or in high-reliability code.

5. Add diagnostic code, logging and tracing intelligently to help explain what’s going on at run-time, especially if you run into a problem.

6. Standardize error handling. Decide how to handle “normal errors” or “expected errors” and warnings, and do all of this consistently.


