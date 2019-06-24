import React, { Component } from 'react'
import './_Body.scss';

class Body extends Component {
  render () {
    return (
      <div className="bodyPage">
        <section class="domino-nav-1">
          <article>
            <div class="Module Module-314">
              <div class="ModuleContent">
                <div class="about-nav-controls" aria-label="Carousel Navigation" tabindex="0">
                  <span class="prev" tabindex="-1" data-controls="prev" aria-disabled="false">
                    <i class="fas fa-chevron-left"></i>
                  </span>
                  <span class="next" tabindex="-1" data-controls="next" aria-disabled="true">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </div>
                <div class="container">
                  <div class="tns-outer">
                    <div class="divCover">
                      <div class="tns-inner">
                        <ul class="nav nav-slider">
                          <li class="nav-item" id="item0" aria-hidden="true" tabindex="-1">
                            <a class="nav-link" href="/en-US/promotion">
                              Promotion
                            </a>
                          </li>
                          <li class="nav-item active" id="item1" aria-hidden="false">
                            <a class="nav-link" href="#/" target="_self">
                              Pizza
                            </a>
                          </li>
                          <li class="nav-item" id="item2" aria-hidden="false">
                            <a class="nav-link" href="#/" target="_self">
                              Sides
                            </a>
                          </li>
                          <li class="nav-item" id="item3" aria-hidden="false">
                            <a class="nav-link" href="#/" target="_self">
                              Drinks
                            </a>
                          </li>
                          <li class="nav-item" id="item4" aria-hidden="false">
                            <a class="nav-link" href="#/" target="_self">
                              Dessert
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
