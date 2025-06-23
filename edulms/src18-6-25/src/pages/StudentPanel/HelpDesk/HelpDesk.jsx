import React from "react";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";

const HelpDesk = () => {
  return (
    <div>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div className="page-content ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Help Desk</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Welcome to the Help Desk! How can we assist you today?
                    </p>
                    <form>
                      <div className="row">
                        <div class="mb-3 col-md-4">
                          <label for="recipient-name" class="col-form-label">
                             Name:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                        </div>
                        <div class="mb-3 col-md-4">
                          <label for="recipient-name" class="col-form-label">
                            Email:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                        </div>
                        <div class="mb-3 col-md-4">
                          <label for="recipient-name" class="col-form-label">
                            Batch Code:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                      </div>

                      <div class="mb-3 col-md-6">
                          <label for="recipient-name" class="col-form-label">
                            Subject:
                          </label>
                          <textarea
                            class="form-control"
                            id="recipient-name"
                            rows="3"
                            ></textarea>
                      </div>
                      <div class="mb-3 col-md-6">
                          <label for="recipient-name" class="col-form-label">
                            Message:
                          </label>
                          <textarea
                            class="form-control"
                            id="recipient-name"
                            rows="3"
                            ></textarea>
                      </div>
                      </div>
                      
                    </form>
                     <div class="modal-footer gap-2">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
