Running Task

To run all test : npm test
To run specific test : npx jest "foldername"/"filename"
To compile typescript file into Javascript: npx tsc / npx tsc --watch (continuously running)
Compilation result (JS files) directory is in the same place as typescript files by default
You can change it by changing tsconfig.json "outdir"
You can choose what TS file you want to compile by changing tsconfig.json "include" and "exclude" eg. ["srcs/**/*"]

Issues
babel works by removing typescript and building javascript code, this behavior sometimes cause false unittest result (compile it regularly)