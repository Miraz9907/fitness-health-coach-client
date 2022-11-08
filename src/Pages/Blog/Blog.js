import React from "react";

const Blog = () => {
  return (
    
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
                        Blog
                    </h2>
                    <p className="font-normal text-gray-500 sm:text-xl dark:text-gray-700">
                        Basic Question about Frontend and Server
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                            Difference between SQL and NoSQL
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            SQL databases are relational, NoSQL databases are
                            non-relational. <br />
                            SQL databases use structured query language and have
                            a predefined schema. NoSQL databases have dynamic
                            schemas for unstructured data. <br /> SQL databases
                            are vertically scalable, while NoSQL databases are
                            horizontally scalable. SQL databases are
                            table-based, while NoSQL databases are document,
                            key-value, graph, or wide-column stores. <br />
                            SQL databases are better for multi-row transactions,
                            while NoSQL is better for unstructured data like
                            documents or JSON.
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                            What is JWT, and how does it work?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            JWTs or JSON Web Tokens are most commonly used to
                            identify an authenticated user. They are issued by
                            an authentication server and are consumed by the
                            client-server (to secure its APIs). <br />
                            JWT differ from other web tokens in that they
                            contain a set of claims. Claims are used to transmit
                            information between two parties. What these claims
                            are depends on the use case at hand. For example, a
                            claim may assert who issued the token, how long it
                            is valid for, or what permissions the client has
                            been granted. <br /> A JWT is a string made up of
                            three parts, separated by dots (.), and serialized
                            using base64. Once decoded, you will get two JSON
                            strings: <br /> 1. The header and the payload.{" "}
                            <br /> 2. The signature.
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                            What is the difference between javascript and
                            NodeJS?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            JavaScript is a proper high-level programming
                            language used to create web scripts whereas Node.js
                            is a run time environment built on google's v8
                            engine. <br /> JavaScript is executed in the browser
                            whereas using Node.js gives us the ability to
                            execute JavaScript outside the browser. <br />{" "}
                            JavaScript can manipulate DOM or add HTML within
                            whereas Node.js doesn't have the capability to add
                            HTML. <br />
                            JavaScript is mainly used to create front end web
                            applications or develop client-side whereas Node.js
                            is used on the back end development that is
                            server-side development
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                            How does NodeJS handle multiple requests at the same
                            time?
                        </h2>
                        <p className="mb-5 font-normal text-black">
                            NodeJS receives multiple client requests and places
                            them into EventQueue. NodeJS is built with the
                            concept of event-driven architecture. NodeJS has its
                            own EventLoop which is an infinite loop that
                            receives requests and processes them. EventLoop is
                            the listener for the EventQueue. If NodeJS can
                            process the request without I/O blocking then the
                            event loop would itself process the request and
                            sends the response back to the client by itself.
                            But, it is possible to process multiple requests
                            parallelly using the NodeJS cluster module or
                            worker_threads module.
                        </p>
                    </article>
                </div>
            </div>
        
  );
};

export default Blog;
