import React from "react";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";

const ProgressTracking1 = () => {
  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Progress Tracking / Monitor individual Student</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Progress Tracking</a>
                      </li>
                      <li class="breadcrumb-item active">
                        DashBoard
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <button
                    className="btn btn-primary waves-effect waves-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    + Add Instuctor Management
                  </button>

                  <div class="page-title-right">
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row">
              <div class="col-xl-3 col-sm-6">
                <div class="card text-center">
                  <div class="card-body">

                    <div class="mx-auto mb-4">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        class="avatar-xl rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 class="font-size-16 mb-1">
                      <a href="#" class="text-body">
                        Learn Figm - UI/UX Design Essential Tranning
                      </a>
                    </h5>
                    <p class="text-muted mb-2">Vijay Kumar</p>
                    <p class="text-muted">
                      STU1023 <span class="text-muted">/ 2025-05-01 / 75%</span>
                    </p>
                  </div>

                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-user me-1"></i> Details
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-envelope-alt me-1"></i> Sent Message
                    </button>
                  </div>
                </div>
              </div>
              
             <div class="col-xl-3 col-sm-6">
                <div class="card text-center">
                  <div class="card-body">

                    <div class="mx-auto mb-4">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        class="avatar-xl rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 class="font-size-16 mb-1">
                      <a href="#" class="text-body">
                        Learn Figm - UI/UX Design Essential Tranning
                      </a>
                    </h5>
                    <p class="text-muted mb-2">Vijay Kumar</p>
                    <p class="text-muted">
                      STU1023 <span class="text-muted">/ 2025-05-01 / 75%</span>
                    </p>
                  </div>

                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-user me-1"></i> Details
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-envelope-alt me-1"></i> Sent Message
                    </button>
                  </div>
                </div>
              </div>


              <div class="col-xl-3 col-sm-6">
                <div class="card text-center">
                  <div class="card-body">

                    <div class="mx-auto mb-4">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///9PqkFMqT5JqDpEpjRApS8+pCxGpzb9/vxIqDlDpjLr9eo+pC3z+fJltFn3+/ZdsFHl8uPH4sPb7dnO5suTyIz0+fPf7t19vnTV6dJZr0y63Law1qxUrUam0aBfsVOLxIPC376ezpi527VwuGaEwXup06OBwHh0umqQx4ibzJQpngw1oSCv1qkwoBlD5rxGAAAOgklEQVR4nO1dC3eqOtMuARIIAl6raLHea932/f8/78uEW4KiIvSQ+PVZZ61TdynmIZO5JDPD29sf/vCHP7wa/K4H8OtYR12P4LfxM+t6BL+NGZ52PYTfhYfcfddj+F2ciGGNuh7EbyLChmG+8kr0TGQYBn5dder1gaCBdl0P5LcwiE2Dozfseii/gxEXUT6J8XvXg/kNRCQjaBgvaTEityBoGHTZ9Xhax9gWCTJ9uu16RC1jjI0S8KLrMbWKsYXKDA1r3fWoWsSYXBJka/F1bEaErxE0jPO465G1hBBdJ8hm8UXct5lZQdBA6CVixSWtIgjOjdf18JpjfIMgi6T6TtcDbArfqFqECYj2weKuchFm2mbT9RCb4XRTRjmw1pZ/eJ8gE9RB18N8Ht6dRZgAfXY9zucR3FuE6SROuh7os9g8IqMAW1MP1XMfJMgMv57nNZOHGRruV9eDfQbTR2UUoKXJqHa4r8kp0k9Oo4t9i5vQUJ8Gj5hCAVS385q1XY+gdlv9zmfNKTSMnl7KZltHkaaTiLoedB2Ece0pNAzrp+th18DSqk+Qeen6WAz/GYLMYuhzmPFRfxUmk6jNoVt9RZrA0mUSR89NIcyiJjtvJ/IsQ6rHmVvYf1JI2RzOux78QxjXddjESdTisGZVJ2wqQYtsovfHQ/srcDU4yHjCJRWgg9WvGxjKQJ/KGwyvXmx/gZ7yp6bLp41hAlP57Yxn4iYJtGsGdzB6LqwQYCtuEg8NhZTZi++uOdzGrKmQGihWWpv6jZeh6p7bqIFPmsFVWpv+NF6GTEwDlcV038DrzmGrnEc0b74MmW+q8Lai39BlS6ByCNUk+BXgqrsQP1pQNAw9dc+hmoT3Aix1N6SaxYY5zFXXRCrR2O1OoO6Wm9doA0OAraqqeX6zuwRlj7wfStR7iKGqzncbXimHsl5NjSyo2zBVjYK/2jGHCvttu3bMocKpJ8+ejF4yVDSpNmwlduIM52HXZK7Ci1siqGzCqdfWFDKoeQQ1aEuVsklUlGFb5pCZCzUrFFpk6CrKsD0pVZRhi5pGUYZ+a9ZCVYbtWXxVdekTicGVUJNhWxtRDIr6NC3GFor6pe3Fh6rGFm+T1hiqGh+2tk+jbIx/uzK9DkNVj4Fb2y9Vdq8tbOdwTeH90uYJURlDVfe82znGZ7AVNYdvbx/tHD6huGsilRj1WmFoqtvszGknyicfXROpRjt+G1YzOuT4aWMhqnsEzDBow+YrnX/ptBEiUqXrZZ+veSpAFA3wE0TNF6KyoVOK5rtR5NQ1h9vYNBZT1fvUDZqmJ6K5qsk0GZpqU2Wj3xyLhiYRKxs5ZXiq20AB1O+awH000zU6lAJ7jbxvpENNfpM8WtWNYYIm7rcOVbIM+6cDYYWzgyU8X0dKVS4mETF5Up2ax65H/iju9WWtgvrWPsfhqSBK2QOZK3Ce6o2hdElXGTUb0nG4q65HXQtPWAxFEzCq4Fd2Yq8CVfVIrQp1u+4pvUt6Hat6RtHWx1JkqBcoatnXe1RDn6pd3lyJn8eXoqXwYcwt7B9ditq+dSZ8MJfPUn5/rRKe/QhFd6flIkwQPbAUUV/RTMTHsL1LESmaEPwwlvco6v86xNNtiq/w2qfVrb03tQ98H8UNilq2m7+CfRXFVyFYOYuvIaIJvq9RtF+I4Nvb5iLlDeEX0KIiPkqxlIn0C3nvYCi/ifSotat2HdN5cexGtThFqw0/yOJFbTp318YxEVRlq36aY5j4qC/1llUZ76mYvuwUpm8QQtocEz4B3t9UsyOYeuA963Roaf00BnB0qnA/tubwIf/0FcL6akAlra39zswtQMJUT/PNtduAvD78gk53AWiPibsexK8Cuta9NsMIGGp8THEfo5dnOCX/Lxi+cGiRMtQrNagmBj2kY2JJHUwMqv952m34692DmxiO5/th6ADCMPQBV3TUu59cAteE4XuohBp7cBAzI57P+ynm8ziO5/1gtZW92oGZXTNP0N996xK7jM82MRGHSW3bppYLP1o4EGVghbOrTItahF9CNXnjZzgdbnZ86wrtfhbD4Xa5Dyh8RnZQrGR/NNzwoke0O/wcTrOYwgf7qI1F4l197EwwnenJhcRVRA/iRbzCI40639cx/ImlzcvM+VtPxMpgf89PsWwxyYgnXefd+H2ep6SNwuYVm3Lt85ZwBsIs8hLyXp4lzhs4arOhx6tTSrVCY744hWrahGGhY6HHijYZuf4VhsnLalGQfy4z5G+hIP/VEBuCMzTLjuzRlA7JOUOhm8aawrt3/6shNsT7VYZ8dZp54X7CsLhoYVW1gEltiOOJxsTzKlyQ0POulkMm+0z+dHQ1hGDe1/XbvfnXvun6HCbnHzmnMkO+3XWpSwfrL057/DU34lmqer1lwNbs9+VYB8tdjIw42JTqXKLTHI53p/uYUHNX7mg12gTM9/rcrxMqwjMYrj7Z/eazRYlkBUOQw6KitsyQfbRKUzjdztwetWaMX79nIgOZZ1DG4TcGzYzccmbP9HjGmNoEIYKP2Z399SbAtmud3vwvbHI34yzlp0fBGRuxRcAJ239st/t/6eNxPgi7HaUu+02pELiCoWeJBiFhmMvGgRp0Jj+p9T8Ms26unNUZHEBub9ZvQ8O2KOWH7/Kcb2xibKJptJwzcTDdZKac+ZkbKnKITEoswv+uJ6Q3nzDZRX44ncDoTMuyXJqMfPRJ6Ww4Ha1n8M29lfhVFQx59nGuTRNdmlwUeicbGeUuRU60wjC4+fy8GnreOuAlPV89/PUxXE/4NIpF5Gwg/fR2kOyE0uZjoxXmHlVg4ePy42cG3giK86W6srOGj0nOKaXnJF1hbCE79ZTHUGlDRYredYb8vDzvmMUZos/dcXbcBS4xzGtp4x5cRDKJ49qYzpJPA3BshfeDflNBM0PdSP5NPn//A9klv434Wsm+bI0NO4tqYHjzaJg8mAFBhf8xhS/uCWuiiiEvp3ZFhoZJGFy+PNz54dLz/iFCCSfIRvEJdgDdPD1kbIvluvzmNBMKaLRbtOaE3d/8UnZd/qYq/ots1Duz8KwTRY+EV1pVMTy5ZYbm12S1nx0DA0QdWe5FkMj8AGHgX6ZY78huUBgfNr9ixh2MNl8Q8E7u4llA292sVIT5ioUTAu0Hs5Jf9sCkchL+xIr7VzHcuIJRl3Spt/20eFJZWVR/JIaMr3DazuxLPjMQqfTEb4SKWDIoGJJCf/IefMnoI1tg6LCpzsopv025MdQWrHUR+lQx/HZFTfMp+TTOiecJlsumZYbM3hSzBt+K+ulz5p09RKMN8pI99HeYw4IhLEuSLAg43s6FDxim+evwo3Tq7dlSD9oqhmDyC2shM0w7V5SLbmWGYyp2MwKGWduYE5vPvriMwfhm8wZHvIWUcoY0uRbKEnD2UB03vx94ZZak25H09odBhbUAucxPy3l8KHV541E/lf9MZigJFcxbPodMickpTRCjZnL2LjM8FQwhZsvnaorz9hCDC4ZwSlyUk1Yw9EHR5JycOSqdu/LoonSaLjMcVTLksZfoj4IcZW1zSnMIwpIy5BoklVj278hOZwlaLRJpS4Iv3nsMuX7LZTlhKC47vjUgP7mbDNcCQ5A8SSBCXMwOvEtWaBIEDLNOnUN4EDvOa4RR/l5jYCC3oDu5opAMelcZwmPIbVTCUKoE565QKefjLsP0Z3jxNhUVMaykTB6gtb7wLtileAzzzcZqGpvxeONace6Sh7RcfDgxxa/mDC/6gXg9Kf0vYSieFfCgq/QW81vrUGQISlGKvfg6HNxn+La02dgJZj77SdDFIL22KBNsHQq3mPYu9mnekim0i8fsxGUpnfINLDlOO8i69HIdpj/73BEXFuJCULvwS0HmZIbMqTNJvJusJYcKJFnqSkOkdJSrDCHFkQjbhbwgV3rzJVhVtxRALSWGbCVXMHxbufKQmO3tZUrLN6QOLJxh8TD82ZW0yynYVyE7Y2BLbj5naMsb+VPmn5NA+IeQ7y+KwSiYD6tk8dmzFIRvXc2Q97Qm+V8z21b4Bj6SRPggMfxAbnxlJ/rLlR43eypiqJYoRUllRGzG6E68U8h3ngTNCVtVuLyzz1SYMDaw8YH0qXiuUDuRhU/QqQUV1suHSKNwJcTkGSegoGdHFxz5eyHztOgBQlgMm7fcx4wLMXWW7AvxRApwueMjbB+Cz4nLxeEjnp+ciXIIZtfdprfxQRu4RTyy4/7/B/w2/GYRcj6fPvf4zewuA+7y76f8NiGvRnApJf3j92E7LuRyCLEpPfK7RLFpCyvAGScl78heDQeO43jDiUtM2pd2R5wB37UxzGAN1wwW7Flahmztw9U8Kfiw+ysmVJtPTOAwx+bxYrRLSl2JvUv/yvmGf6Hu12RPKJ5lz3c0x0kzjJ4bsKexMXhUbZi9xFous4ILhFxi2XiXj2Ecw1YBDr4nAaZxsVSdGcqrbE2KMfxnsWFIi3kaEJzWACB2AbExdam5KW13+WemwjnOFvvVZrX/YsHy5xyd2RJf/kt/h//lkj7eYct12Q17s+Jxrv9HU9j/2F2OOPt4TrTrRi5ERDi/nb9xe5bLBofnB2Foi/9Ri4NwWJRi67gs6Y/9mdL0EvY/9m2YHD8ut/M8z/P9d36IKk6/wwURfpn8ThD+wXazmvwMxVu9r4eAMQPI6XSdfcokcpqeA1KLB+KiFxKOfyarzVY+4J8uFovtdvuRYTGcXm43Rus1uyq9Yru4es1/hfcjXkUDbzCKtvuYGIo3DH4CbJkW+jw8UPW7zdbEkNhSejezeyioulhHbHulQhnf0qrz1V34LirxCedIk3yCxzDC5VUXmsh6pewvCHSJZMmGVON+H1eQbJ0KC9FH5KX0DAuwYZu7n1v00acdvFg+uwO5P8g6/kSjUfQxo+e9Nik9j8I52rBLR5gTafdwrEvqWS0Mj7FNmX9so+PLVlj60eJw2EavZCT+8Ic//AHwf3u91m6g/KpnAAAAAElFTkSuQmCC"
                        alt=""
                        class="avatar-xl rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 class="font-size-16 mb-1">
                      <a href="#" class="text-body">
                        Learn Figm - UI/UX Design Essential Tranning
                      </a>
                    </h5>
                    <p class="text-muted mb-2">Vijay Kumar</p>
                    <p class="text-muted">
                      STU1023 <span class="text-muted">/ 2025-05-01 / 75%</span>
                    </p>
                  </div>

                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-user me-1"></i> Details
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-envelope-alt me-1"></i> Sent Message
                    </button>
                  </div>
                </div>
              </div>


              <div class="col-xl-3 col-sm-6">
                <div class="card text-center">
                  <div class="card-body">

                    <div class="mx-auto mb-4">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        class="avatar-xl rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 class="font-size-16 mb-1">
                      <a href="#" class="text-body">
                        Learn Figm - UI/UX Design Essential Tranning
                      </a>
                    </h5>
                    <p class="text-muted mb-2">Vijay Kumar</p>
                    <p class="text-muted">
                      STU1023 <span class="text-muted">/ 2025-05-01 / 75%</span>
                    </p>
                  </div>

                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-user me-1"></i> Details
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light text-truncate"
                    >
                      <i class="uil uil-envelope-alt me-1"></i> Sent Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Instructor Management
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="row">
                    <div class="mb-3 col-md-4">
                      <label for="recipient-name" class="col-form-label">
                        Instructor Name:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3 col-md-4">
                      <label for="recipient-name" class="col-form-label">
                        Experince
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="mb-3 col-md-4">
                      <label htmlFor="role" className="col-form-label">
                        Role:
                      </label>
                      <select className="form-control" id="role">
                        <option value="">Select Role</option>
                        <option value="admin">Full stack</option>
                        <option value="teacher">Mern stack</option>
                        <option value="student">Soild Work</option>
                        <option value="parent">AI generator</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
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
    </>
  );
};

export default ProgressTracking1;
