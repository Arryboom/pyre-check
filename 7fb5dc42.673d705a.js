(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),l=(t(0),t(79)),i={id:"querying-pyre",title:"Querying Pyre",sidebar_label:"Querying Pyre"},o={unversionedId:"querying-pyre",id:"querying-pyre",isDocsHomePage:!1,title:"Querying Pyre",description:"Pyre has a subcommand called query allows you to hook into a Pyre server and get type-related",source:"@site/../docs/querying_pyre.md",permalink:"/docs/querying-pyre",sidebar_label:"Querying Pyre",sidebar:"overview",previous:{title:"Errors",permalink:"/docs/errors"},next:{title:"Overview",permalink:"/docs/pysa-basics"}},s=[{value:"Supported Queries",id:"supported-queries",children:[{value:"Attributes",id:"attributes",children:[]},{value:"Callees",id:"callees",children:[]},{value:"Defines",id:"defines",children:[]},{value:"Dump call graph",id:"dump-call-graph",children:[]},{value:"Dump class hierarchy",id:"dump-class-hierarchy",children:[]},{value:"Join",id:"join",children:[]},{value:"Less or equal",id:"less-or-equal",children:[]},{value:"Meet",id:"meet",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Normalize type",id:"normalize-type",children:[]},{value:"Path of module",id:"path-of-module",children:[]},{value:"Qualified names",id:"qualified-names",children:[]},{value:"Save server state",id:"save-server-state",children:[]},{value:"Signature",id:"signature",children:[]},{value:"Superclasses",id:"superclasses",children:[]},{value:"Type",id:"type",children:[]},{value:"Type at position",id:"type-at-position",children:[]},{value:"Types in file",id:"types-in-file",children:[]}]},{value:"API Details",id:"api-details",children:[{value:"Location Guidelines",id:"location-guidelines",children:[]},{value:"Batching Queries",id:"batching-queries",children:[]},{value:"Caching",id:"caching",children:[]}]}],c={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Pyre has a subcommand called ",Object(l.b)("inlineCode",{parentName:"p"},"query")," allows you to hook into a Pyre server and get type-related\ninformation without having to run a full type check."),Object(l.b)("p",null,"This allows you, for instance, to get the type of an expression at a certain line and column, check whether a type is a subtype of the other, or get the list of methods for a class."),Object(l.b)("p",null,"To get started, set up a server with ",Object(l.b)("inlineCode",{parentName:"p"},"pyre")," or ",Object(l.b)("inlineCode",{parentName:"p"},"pyre start"),". The rest of this page goes through the various query options with examples. You can also run ",Object(l.b)("inlineCode",{parentName:"p"},"pyre query help")," to see a full list of available queries to the Pyre server."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," The responses in the examples are prettified using the ",Object(l.b)("inlineCode",{parentName:"p"},"pyre query <query> | python -m json.tool")," pattern."),Object(l.b)("h2",{id:"supported-queries"},"Supported Queries"),Object(l.b)("h3",{id:"attributes"},"Attributes"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"attributes")," gives you the list of attributes for a class."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# a.py\nclass C:\n    a: int = 2\n    def foo(self) -> str:\n        return ""\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "attributes(a.C)"\n{\n    "response": {\n        "attributes": [\n            {\n                "annotation": "int",\n                "name": "a"\n            },\n            {\n                "annotation": "typing.Callable(a.C.foo)[[], str]",\n                "name": "foo"\n            }\n        ]\n    }\n}\n')),Object(l.b)("h3",{id:"callees"},"Callees"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"callees")," returns a list of all calls from a given function, including locations if using ",Object(l.b)("inlineCode",{parentName:"p"},"callees_from_location"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# a.py\ndef foo() -> None: pass\ndef bar() -> None:\n    foo()\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "callees(a.bar)"\n{\n    "response": {\n        "callees": [\n            {\n                "kind": "function",\n                "target": "a.foo"\n            }\n        ]\n    }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "callees_with_location(a.bar)"\n{\n    "response": {\n        "callees": [\n            {\n                "locations": [\n                    {\n                        "path": "a.py",\n                        "start": {\n                            "line": 6,\n                            "column": 5\n                        },\n                        "stop": {\n                            "line": 6,\n                            "column": 8\n                        }\n                    }\n                ],\n                "kind": "function",\n                "target": "a.foo"\n            }\n        ]\n    }\n}\n')),Object(l.b)("h3",{id:"defines"},"Defines"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"defines")," returns all function and method definitions for a given module or class."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# a.py\nclass C:\n    a: int = 2\n    def foo(self) -> str:\n        return ""\n\ndef bar() -> None: pass\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "defines(a.C)"\n{\n    "response": [\n        {\n            "name": "a.C.foo",\n            "parameters": [\n                {\n                    "name": "self",\n                    "annotation": null\n                }\n            ],\n            "return_annotation": "str"\n        }\n    ]\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "defines(a)"\n{\n    "response": [\n        {\n            "name": "a.C.foo",\n            "parameters": [\n                {\n                    "name": "self",\n                    "annotation": null\n                }\n            ],\n            "return_annotation": "str"\n        },\n        {\n            "name": "a.bar",\n            "parameters": [],\n            "return_annotation": "None"\n        }\n    ]\n}\n')),Object(l.b)("h3",{id:"dump-call-graph"},"Dump call graph"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"dump_call_graph()")," returns a comprehensive JSON mapping each call to a list of callees."),Object(l.b)("h3",{id:"dump-class-hierarchy"},"Dump class hierarchy"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"dump_class_hierarchy()")," returns the entire class hierarchy as Pyre understands it; elides type variables."),Object(l.b)("h3",{id:"join"},"Join"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"join")," uses Pyre's type engine to find a common superclass for two types."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "join(typing.Iterable[int], typing.Iterable[str])"\n{\n    "response": {\n        "type": "typing.Iterable[typing.Union[int, str]]"\n    }\n}\n')),Object(l.b)("h3",{id:"less-or-equal"},"Less or equal"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"less_or_equal")," returns whether the type on the left can be used when the type on the right is expected."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# a.py\nclass C:\n  pass\n\nclass D(C):\n  pass\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "less_or_equal(a.D, a.C)"\n{"response":{"boolean":true}}\n\n$ pyre query "less_or_equal(a.C, a.D)"\n{"response":{"boolean":true}}\n')),Object(l.b)("h3",{id:"meet"},"Meet"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"meet")," uses Pyre's type engine to find a common subclass for two types."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "meet(typing.Iterable[int], typing.Iterable[typing.Union[int, str]])"\n{\n    "response": {\n        "type": "typing.Iterable[int]"\n    }\n}\n')),Object(l.b)("h3",{id:"methods"},"Methods"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"methods")," returns the list of methods for a type, excluding inherited ones."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# a.py\nclass C:\n  def f(self, x: int) -> str:\n    return ""\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "methods(a.C)"\n{\n    "response": {\n        "methods": [\n            {\n                "name": "foo",\n                "parameters": [\n                    "self",\n                    "int"\n                ],\n                "return_annotation": "str"\n            }\n        ]\n    }\n}\n')),Object(l.b)("h3",{id:"normalize-type"},"Normalize type"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"normalize_type")," resolves type aliases for a given type."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# a.py\nA = typing.Union[int, str]\nB = typing.Union[A, typing.List[str]]\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "normalize_type(a.B)"\n{\n    "response": {\n        "type": "typing.Union[typing.List[int], int, str]"\n    }\n}\n')),Object(l.b)("h3",{id:"path-of-module"},"Path of module"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"path_of_module")," returns the full absolute path for a given module."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "path_of_module(module_name)"\n{\n    "response": {\n        "path": "/Users/user/my_project/module_name.py"\n    }\n}\n')),Object(l.b)("h3",{id:"qualified-names"},"Qualified names"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"qualified_names")," returns a map from each given path to a list of all qualified names contained in that path. It can be called on multiple files at once with ",Object(l.b)("inlineCode",{parentName:"p"},"qualified_names('path1', 'path2', ...)"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# a.py\nclass A: pass\n\n# b.py\nfrom .a import A as RenamedA\n\na = RenamedA\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "qualified_names(path=\'b.py\')"\n{\n    "response": [\n        {\n            "path": "b.py",\n            "qualified_names": [\n                {\n                    "location": {\n                        "start": {\n                            "line": 1,\n                            "column": 15\n                        },\n                        "stop": {\n                            "line": 1,\n                            "column": 16\n                        }\n                    },\n                    "qualified_name": "a.A"\n                },\n                {\n                    "location": {\n                        "start": {\n                            "line": 1,\n                            "column": 20\n                        },\n                        "stop": {\n                            "line": 1,\n                            "column": 28\n                        }\n                    },\n                    "qualified_name": "a.A"\n                },\n                {\n                    "location": {\n                        "start": {\n                            "line": 3,\n                            "column": 0\n                        },\n                        "stop": {\n                            "line": 3,\n                            "column": 1\n                        }\n                    },\n                    "qualified_name": "b.a"\n                },\n                {\n                    "location": {\n                        "start": {\n                            "line": 3,\n                            "column": 4\n                        },\n                        "stop": {\n                            "line": 3,\n                            "column": 12\n                        }\n                    },\n                    "qualified_name": "a.A"\n                }\n            ]\n        }\n    ]\n}\n')),Object(l.b)("h3",{id:"save-server-state"},"Save server state"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"save_server_state")," saves the server's serialized state into the given ",Object(l.b)("inlineCode",{parentName:"p"},"path"),", which can the be used to start up the identical server without re-analyzing all project files."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "save_server_state(\'my_saved_state\')"\n{\n    "response": {\n        "message": "Saved state."\n    }\n}\n$ pyre stop\n$ pyre --load-initial-state-from my_saved_state start\n')),Object(l.b)("h3",{id:"signature"},"Signature"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"signature")," returns the type signature of a given function."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# a.py\ndef foo(x: int) -> str:\n  ...\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "signature(a.foo)"\n{\n    "response": {\n        "signature": [\n            {\n                "parameters": [\n                    {\n                        "annotation": "int",\n                        "parameter_name": "x"\n                    }\n                ],\n                "return_type": "str"\n            }\n        ]\n    }\n}\n')),Object(l.b)("h3",{id:"superclasses"},"Superclasses"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"superclasses")," returns the superclasses of a given class name."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "superclasses(int)"\n{\n    "response": {\n        "superclasses": [\n            "float",\n            "complex",\n            "numbers.Integral",\n            "numbers.Rational",\n            "numbers.Real",\n            "numbers.Complex",\n            "numbers.Number",\n            "typing.SupportsFloat",\n            "typing.Any"\n        ]\n    }\n}\n')),Object(l.b)("h3",{id:"type"},"Type"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"type")," evaluates the type of the given expression."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "type([1 + 2, \'\'])"\n{\n    "response": {\n        "type": "typing.List[typing.Union[int, str]]"\n    }\n}\n')),Object(l.b)("h3",{id:"type-at-position"},"Type at position"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"type_at_position")," returns the type of the symbol at the provided position."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# a.py\nvariable = 2\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "type_at_position(\'a.py\', 1, 2)"\n{\n    "response": {\n        "annotation": "int",\n        "location": {\n            "path": "a.py",\n            "start": {\n                "column": 0,\n                "line": 1\n            },\n            "stop": {\n                "column": 8,\n                "line": 1\n            }\n        }\n    }\n}\n')),Object(l.b)("h3",{id:"types-in-file"},"Types in file"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"types")," returns all the types for a file that Pyre has been able to resolve. It can be called on multiple files at once with\n",Object(l.b)("inlineCode",{parentName:"p"},"types('path1', 'path2', ...)"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# a.py\nclass C:\n  attribute = ""\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "types(path=\'a.py\')"\n{\n    "response": [\n        {\n            "path": "a.py",\n            "types": [\n                {\n                    "annotation": "str",\n                    "location": {\n                        "path": "a.py",\n                        "start": {\n                            "column": 16,\n                            "line": 2\n                        },\n                        "stop": {\n                            "column": 18,\n                            "line": 2\n                        }\n                    }\n                },\n                {\n                    "annotation": "str",\n                    "location": {\n                        "path": "a.py",\n                        "start": {\n                            "column": 4,\n                            "line": 2\n                        },\n                        "stop": {\n                            "column": 13,\n                            "line": 2\n                        }\n                    }\n                },\n                {\n                    "annotation": "typing.Type[a.C]",\n                    "location": {\n                        "path": "a.py",\n                        "start": {\n                            "column": 4,\n                            "line": 2\n                        },\n                        "stop": {\n                            "column": 13,\n                            "line": 2\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n')),Object(l.b)("h2",{id:"api-details"},"API Details"),Object(l.b)("h3",{id:"location-guidelines"},"Location Guidelines"),Object(l.b)("p",null,"We determine locations for expressions using the following guidelines:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ignore leading and trailing whitespace, commas, comments, and wrapping parenthesis."),Object(l.b)("li",{parentName:"ul"},"Include whitespace, parenthesis or other noop tokens in the locations of compound expressions they are nested inside.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"(a).b")," will register two expressions, a at columns 1-2 (still following the guideline above), and ",Object(l.b)("inlineCode",{parentName:"li"},"a.b")," at columns 0-5"))),Object(l.b)("li",{parentName:"ul"},"Similarly, compound expression locations must encompass the locations of all of its components.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"a = b = 1")," will register the assignment ",Object(l.b)("inlineCode",{parentName:"li"},"a = 1")," at columns 0-9, with ",Object(l.b)("inlineCode",{parentName:"li"},"a")," at columns 0-1 and ",Object(l.b)("inlineCode",{parentName:"li"},"1")," at columns 8-9"),Object(l.b)("li",{parentName:"ul"},"The only exception are classes, which do not encompass their decorators"))),Object(l.b)("li",{parentName:"ul"},"All semantically meaningful tokens and reserved words are included in the node they define.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"await a")," will register the awaitable node at columns 0-7, and the included identifier ",Object(l.b)("inlineCode",{parentName:"li"},"a")," at columns 6-7"),Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"async def foo(): ...")," will register the define node at columns 0-20"),Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"foo(*args, **kwargs)")," will register args at columns 4-9 and kwargs at columns 11-19"),Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},'"""string"""')," will register the string string at columns 0-12"))),Object(l.b)("li",{parentName:"ul"},"All implicit values in the AST contribute a length of 0 and point to the closest location to where an equivalent explicit value would live.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"a: int")," would register an Ellipsis object at columns 6-6"),Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"a[0]")," would register a at columns 0-1 and ",Object(l.b)("inlineCode",{parentName:"li"},"a.__getitem__")," at columns 0-1"),Object(l.b)("li",{parentName:"ul"},"Ex. ",Object(l.b)("inlineCode",{parentName:"li"},"a[:1]")," would register the first argument of slice to be ",Object(l.b)("inlineCode",{parentName:"li"},"None")," at columns 2-2, the second argument to be ",Object(l.b)("inlineCode",{parentName:"li"},"1")," at columns 3-4, and the third argument to be ",Object(l.b)("inlineCode",{parentName:"li"},"None")," at columns 4-4.")))),Object(l.b)("h3",{id:"batching-queries"},"Batching Queries"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"batch")," command can be used to run several queries at once and return a map of responses. The list of queries to batch may include any combination of other valid queries except for ",Object(l.b)("inlineCode",{parentName:"p"},"batch")," itself."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ pyre query "batch(less_or_equal(int, str), join(int, str))"\n{\n    "response": [\n        {\n            "response": {\n                "boolean": false\n            }\n        },\n        {\n            "response": {\n                "type": "typing.Union[int, str]"\n            }\n        }\n    ]\n}\n')),Object(l.b)("h3",{id:"caching"},"Caching"),Object(l.b)("p",null,"Pyre rechecks each file when queried to generate the location-type mapping, caching results for re-queries of the same file. If you anticipate a large codemod where significant portions of the codebase will be queried, you may increase incremental performance by starting a temporary server with the flag: ",Object(l.b)("inlineCode",{parentName:"p"},"pyre --store-type-check-resolution start"),"."))}p.isMDXComponent=!0},79:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||l;return t?r.a.createElement(d,o(o({ref:n},c),{},{components:t})):r.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);