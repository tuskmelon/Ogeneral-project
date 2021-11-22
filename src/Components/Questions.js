import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="card mt-2">
        <div
          className="d-flex  bg-white p-4"
          style={{ borderBottom: "1px solid black", borderWidth: "1" }}
        >
          <a
            href="/"
            className="text-left "
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
            Frequently Asked Questions
          </a>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Q.Which AC is better, O General or Mitsubishi?
            </a>
          </p>
          <div class="collapse text-left" id="collapseExample1">
            <div class="card card-body text-left">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample2">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample3">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        {/* <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample4"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample4">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div> */}
        {/* <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample5"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample5">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample6"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample6">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample7"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample7"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample7">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample8"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample8"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample8">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample9"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample9"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample9">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <p
            style={{ fontSize: "15px", backgroundColor: "grey" }}
            className="p-4 text-left  text-decoration-none text-dark"
          >
            <a
              style={{ fontsize: "15px" }}
              class="text-decoration-none text-left p-4 text-dark"
              data-toggle="collapse"
              href="#collapseExample10"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample10"
            >
              Q.question ! question ! question !question !?
            </a>
          </p>
          <div class="collapse" id="collapseExample10">
            <div class="card card-body">
              <b>Ans:</b> pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Questions;
