import React, { Component } from 'react'
import './_Body.scss';

class Body extends Component {
  render () {
    return (
      <div className="bodyPage">
        <section className="domino-nav">
          <article>
              <div className="ModuleContent">
                <div className="about-nav-controls" aria-label="Carousel Navigation" tabIndex="0">
                  <span className="prev" tabIndex="-1" data-controls="prev" aria-disabled="false">
                    <i className="fas fa-chevron-left"></i>
                  </span>
                  <span className="next" tabIndex="-1" data-controls="next" aria-disabled="true">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </div>
                <div className="container black">
                    <div className="divCover">
                        <ul className="nav nav-slider">
                          <li className="nav-item" id="item0" aria-hidden="true" tabIndex="-1">
                            <a className="nav-link" href="#/">
                              Promotion
                            </a>
                          </li>
                          <li className="nav-item" id="item1" aria-hidden="false">
                            <a className="nav-link" href="#/" target="_self">
                              Pizza
                            </a>
                          </li>
                          <li className="nav-item" id="item2" aria-hidden="false">
                            <a className="nav-link" href="#/" target="_self">
                              Sides
                            </a>
                          </li>
                          <li className="nav-item" id="item3" aria-hidden="false">
                            <a className="nav-link" href="#/" target="_self">
                              Drinks
                            </a>
                          </li>
                          <li className="nav-item" id="item4" aria-hidden="false">
                            <a className="nav-link" href="#/" target="_self">
                              Dessert
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
               
          </article>
        </section>
      </div>
    )
  }
}

export default Body
