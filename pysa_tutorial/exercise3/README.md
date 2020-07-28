# Pysa Tutorial: Sanitizers

The purpose of this exercise is to learn how to remove false positive issues
using _sanitizers_.

None of the functions in `views.py` are vulnerable, but they will all show up in
`pyre analyze` as false positives. The goal of this exercise is to make changes
to `sanitizers.pysa` and `views.py` in order to remove the false positives.

## What you need to know

### Pre-written Taint Annotations

Pysa comes with pre-written sources, sinks, and rules for much of the Python
standard library, and many open source libraries. Since the previous exercises
already covered those concepts, from this exercise forward we will be relying on
pre-written sources, sinks, and rules where we can. You can look at the
collection of pre-written `taint.config` and `.pysa` files in the `stubs/taint`
folder in this repository. If you are curious about what changed between this
and the previous exercise to allow us to take advantage of those pre-written
files, compare the `.pyre_configuration` files.

### Sanitizers

_Sanitizers_ are defined in `.pysa` files, just like sources and sinks. An
example is provided in `sanitizers.pysa` and you will have to add more of your
own.

## Instructions

1. `operate_on_twos` has finally been improved to be no longer vulnerable, but
   it's still showing up as if it was vulnerable. Add a new _sanitizer_ to
   `sanitizers.pysa` to fix this.

   You will know you are done this step when you run `pyre analyze`, and only
   see **1 issue** in the output.

1. `operate_on_threes` has also been fixed, but it does not call a function that
   can be marked as a sanitizer. Try writing an identity function (a function
   which always returns it's argument) that you can use as a sanitizer to tell
   Pysa that `result` is benign.

   You will know you are done this step when you run `pyre analyze`, and **don't
   see any issues** in the output.

## Debugging Tips

- Getting `During override analysis, can't find model for 'OverrideTarget'`?
  Don't worry! That's a benign internal Pysa warning; it doesn't indicate
  anything wrong with your code
- `pyre analyze` erroring out? Try these strategies:
  -  Make sure type annotations didn't sneak into your `.pysa` model files. The
     only annotations you should have should be taint annoations: `-> Sanitize`.
     Make sure you remove all type annotations such as `request: HttpRequest`
     from your `.pysa` files.
  - Make sure you're using **fully qualified names**. All of your models for
    functions in this file should look like `def
    FILE_NAME.function_name(arguments) -> Sanitize: ...`