import React from "react";

const Blogs = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-center my-12 text-2xl font-bold">My Blogs</h2>

            <div className="grid lg:grid-cols-2 gap-3">
                {/* Blog 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">
                            What are the different ways to manage a state in a
                            React application?
                        </h2>
                        <p>
                            Managing state in your React apps isn’t as simple as
                            using useState or useReducer. Not only are there are
                            a lot of different kinds of state, but there often
                            dozens of ways of managing each kind. Which should
                            you choose? In this guide, we will uncover the
                            several kinds of state in your React apps that you
                            might not be aware of, plus how to manage them in
                            the most effective way. The Four Kinds of React
                            State to Manage When we talk about state in our
                            applications, it’s important to be clear about what
                            types of state actually matter. There are four main
                            types of state you need to properly manage in your
                            React apps: Local state, Global state, Server state
                            & URL state
                        </p>
                    </div>
                </div>
                {/* Blog 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">
                            How does prototypical inheritance work?
                        </h2>
                        <p>
                            Every object with its methods and properties
                            contains an internal and hidden property known as
                            [[Prototype]]. The Prototypal Inheritance is a
                            feature in javascript used to add methods and
                            properties in objects. It is a method by which an
                            object can inherit the properties and methods of
                            another object. Traditionally, in order to get and
                            set the [[Prototype]] of an object, we use
                            Object.getPrototypeOf and Object.setPrototypeOf.
                            Nowadays, in modern language, it is being set using
                            __proto__.
                        </p>
                    </div>
                </div>
                {/* Blog 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">
                            What is a unit test? Why should we write unit tests?
                        </h2>
                        <p>
                            Unit testing is a software testing method where
                            “units”—the individual components of software—are
                            tested. Developers write unit tests for their code
                            to make sure that the code works correctly. This
                            helps to detect and protect against bugs in the
                            future. Sometimes developers write unit tests first,
                            then write the code. This approach is also known as
                            test-driven development (TDD). In TDD, requirements
                            are turned into specific test cases, then the
                            software is improved to pass the new tests. In this
                            approach, no code is added that hasn’t been proven
                            to meet defined requirements. Unit testing is
                            similar, in that it allows developers to modify code
                            without affecting the functionality of other units
                            or the product, as a whole.
                        </p>
                    </div>
                </div>
                {/* Blog 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">React vs. Angular vs. Vue?</h2>
                        <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. There are a handful of important characteristics to look at here, chief of them being overall size and load times, the components available, and learning curve.The sizes of the libraries won’t be as big of a factor since caching and minification are pretty standard nowadays. Although there can be a significant difference between the sizes of the frameworks (e.g. Angular is the largest), they are still small compared to the average webpage size (about 2MB according to the most recent data). Additionally, if you use a popular CDN to load these libraries, it is highly probable that a user has the library already loaded in their local system.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
