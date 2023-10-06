import React, { useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
//
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
//

function MainContactUSCOPY() {
  const initialFormData = {
    Fullname: "",
    Phone: "",
    Email: "",
    Title: "",
    Content: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // 模態框
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShowWarningModal = () => {
    setShowWarningModal(true);
  };

  const handleShowSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowWarningModal(false);
    setShowSuccessModal(false);
  };
  //
  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredInputs = document.querySelectorAll(
      "input[required], textarea[required]"
    );

    // 表單驗證
    for (let i = 0; i < requiredInputs.length; i++) {
      if (requiredInputs[i].value === "") {
        handleShowWarningModal();
        return;
      }
    }

    // 表單驗證通過，執行 Axios 請求
    let url = "http://localhost:3001/submit";
    let data = {
      Fullname: formData.Fullname,
      Phone: formData.Phone,
      Email: formData.Email,
      Title: formData.Title,
      Content: formData.Content,
    };
    axios
      .post(url, data)
      .then(function (response) {
        if ((response.status = 200)) {
          console.log("OK");
          handleShowSuccessModal();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bgimg">
      <p className="contactus">聯絡我們</p>
      <div className="glass-container" id="glass">
        <div className="container">
          <img
            alt="icon"
            className="centered-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAABK5JREFUeF7tm1vIZlMYx39/ZxK5IuFKpsbFkAunizHlQs0oZQoRUTIXFDOYkTk4TMghIqdxgwhx5XShRA4XGhI1F04hQ7lzQSPFo+eb/dY777f3Xuv53vfd7+Fb6+rr28+71/P81n89a+1nry1KyyagbMtiSIEVEEGBVWAFCARMi7IKrACBgGlRVoEVIBAwLcoqsAIEAqZFWeOAZWbHAmcDZwJHBvqYZtPfgN2SvsxxMqksMzsI2A5sA/zveWw/AeslfdEWXA6sD4HV80ioJqZrJT3fFGsrLDN7ELhtmYDyMP8BVkr6oS7mRlhmdh7wCSy7ysRu4BxJ/w0Ca4O1C7h+GamqP9RVkr6OwHoDuHSZwlojyXP1Aa1NWW8Da2tg/QkcPQcQ2+K4WJLHnw3rLWBdDZRngY+BJ4DjZhTap8BVwI8N/q+T9M5IYEnaYGbHAy8BF84QsH3AHcDjlc+Lknj1/7CymqbhLkk39ACZ2XXAo8AxUw7tM1eTpO/dTzPzFNQtrKrjE4GXgQumENjf1RPII/3bgYnB6lPZBuChKVoA/PHlSknfDA7ixGFVKjsZeAU4f4Iq8534PcD9dZvLiU7DhlG7CXhgAhWKryo17WkbrK6U9RFwkSRfWVqbmZ0KvAicm7Id0fWdkrw6kmxmdgbQVJoZ2WrojnhJw1cW36+kgHlZZxNwL3B4yn6J1z0nXSbJVZXy51Bga7WF8L/r2khhLUz7amO6JVNlK6oV86xUQIHr/1YLyg5JnqdSoFZVPpyeMB05rF5/UZX5ptCLiYelgktc9/3S5amC3cKomrmCvM8twCEZ/Y4NVk9lTwK3Z6rMR/Y1IDXCdXH5RvIx4E5JvocalZr67zNWWEtRmY+2J2NXWs5oex+uYleT78ZTkPz+O4DNgfv37tkJrJ7KnvIKa6bKPI+4yjynNTXPjxHlel58YYnKdR86g9WvMq9pL6oLDRIxM89fvom8FTh44PovwBWZK6/f5y5PBzX3SYmx82m4iAPwdJXL/kp5a2auiFcB359582rtRkm5v/Xn0zaFplzofBrWOfQz4Cr7IOWtmR0B3A28L+m9lP3CvDe7r8p9OeY5Np1PwzqVPVPlsqRSciKqlDgqNU18GtbF7Dno6pxc1pjt9+c4fyLwJ4PBHJfDOWUzcWX1O+irm+ejTTn56IAf7s9r41DTVCqr36lslVW5zFfMjWNS09TD6jnYuuqZmR9I8Xp/b5VMTaNhr0/VNMzKZZWadgK3dHwoJQyr6VXYsKOW+v1zVeJe2bGaZmYaDgL8HfBXbZNqYWU1vQqbVABd9ltgBWgXWAVWgEDAtCirwAoQCJgWZRVYAQIB06KsAitAIGBalDVOWG/6K6FAB/NkulbSu4MBtZ1W9qOPN88TgUAsKyR9G4F1DdD4HUug41kz3SfpqDqn25TlZ92/A06YtWiH9PdhSbXfK6U+dFoPvD5k57P0873AaU3HDnI+ofPDFf5KfN6bg7qk7QhTEpYTMrM1gNfCTwFOmiNq/knKr8DnwI2S/miLLQvWHMEZKpQCK4CvwCqwAgQCpkVZBVaAQMC0KKvAChAImBZlFVgBAgHToqwCK0AgYPo/b4T1W3kAm0UAAAAASUVORK5CYII="
          />
          <form id="myForm" action="/submit" method="post">
            {/* 姓名 */}
            <div className="form-row">
              <div className="input-data">
                <Tooltip
                  title="必填"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                  followCursor={true}
                >
                  <input
                    type="text"
                    required
                    id="Fullname"
                    name="Fullname"
                    autoComplete="name"
                    value={formData.Fullname}
                    onChange={handleInputChange}
                  />

                  <div className="underline"></div>
                  <label htmlFor="Fullname">姓名</label>
                </Tooltip>
              </div>

              {/* 電話 */}
              <div className="input-data">
                <Tooltip
                  title="選填"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                  followCursor={true}
                >
                  <input
                    type="tel"
                    id="Phone"
                    name="Phone"
                    autoComplete="tel"
                    data-tippy-theme="#2f4bae"
                    value={formData.Phone}
                    onChange={handleInputChange}
                  />
                  <div className="underline"></div>
                  <label htmlFor="Phone">電話</label>
                </Tooltip>
              </div>
            </div>

            {/* 電子信箱 */}
            <div className="form-row">
              <div className="input-data">
                <Tooltip
                  title="必填"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                  followCursor={true}
                >
                  <input
                    type="email"
                    required
                    className="hint"
                    id="Email"
                    name="Email"
                    autoComplete="email"
                    value={formData.Email}
                    onChange={handleInputChange}
                  />
                  <div className="underline"></div>
                  <label htmlFor="Email">電子信箱</label>
                </Tooltip>
              </div>

              {/* 主旨 */}
              <div className="input-data">
                <Tooltip
                  title="必填"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                  followCursor={true}
                >
                  <input
                    type="text"
                    required
                    className="hint"
                    id="Title"
                    name="Title"
                    value={formData.Title}
                    onChange={handleInputChange}
                  />
                  <div className="underline"></div>
                  <label htmlFor="Title">主旨</label>
                </Tooltip>
              </div>
            </div>

            {/* 諮詢內容 */}
            <div className="form-row">
              <div className="input-data textarea">
                <Tooltip
                  title="必填"
                  position="top"
                  trigger="mouseenter"
                  arrow={true}
                  followCursor={true}
                >
                  <textarea
                    rows="8"
                    cols="100"
                    required
                    className="hint"
                    id="Content"
                    name="Content"
                    value={formData.Content}
                    onChange={handleInputChange}
                  ></textarea>
                  <br />
                  <div className="underline"></div>
                  <label htmlFor="Content">諮詢內容</label>
                </Tooltip>
              </div>
            </div>
            {/* 提交按鈕 */}
            {/* <button
              className="shadow__btn Sendbutton"
              type="submit"
              onClick={handleSubmit}
            >
              提交
            </button> */}
            <button id="btnsvg" type="submit" onClick={handleSubmit}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>提交</span>
            </button>
            {/* 提交按鈕警告視窗 */}
            <Modal
              className="modaL"
              backdrop="static"
              show={showWarningModal}
              onHide={handleCloseModal}
            >
              <Modal.Header closeButton className="modalTextOne">
                <box-icon
                  name="error-alt"
                  type="solid"
                  animation="flashing"
                  color="#f80808"
                ></box-icon>
                <Modal.Title className="modaLerror">警告</Modal.Title>
              </Modal.Header>
              <Modal.Body className="custom-modal-content">
                請確認"必填"是否已填寫！
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  關閉
                </Button>
              </Modal.Footer>
            </Modal>
            {/* 提交按鈕成功視窗 */}
            <Modal
              className="modaL"
              backdrop="static"
              show={showSuccessModal}
              onHide={handleCloseModal}
            >
              <Modal.Header closeButton className="modalTextTwo">
                <box-icon
                  name="check-square"
                  type="solid"
                  animation="flashing"
                  color="#0fa73f"
                ></box-icon>
                <Modal.Title className="modaLcorrect">成功提交表單</Modal.Title>
              </Modal.Header>
              <Modal.Body className="custom-modal-content">
                您的表單已成功提交。我們將在3~5個工作日內回覆您。
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  關閉
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainContactUSCOPY;
