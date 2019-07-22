import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./CarouselContainer.module.scss";

class CarouselContainer extends Component {
  render() {
    return (
      <div className={classes.Carousel}>
        <Carousel autoPlay infiniteLoop interval="5000" showThumbs={false}>
        <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>
            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 1</p>
          </div>
          <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>

            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 2</p>
          </div>
          <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>

            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 3</p>
          </div>
          <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>
            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 4</p>
          </div>
          <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>
            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 5</p>
          </div>
          <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>
            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 6</p>
          </div>
          <div className={classes.Slide}>
            <p className={classes.Content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              incidunt quas ipsa quod, rerum facilis, similique veniam quaerat
              quasi, esse omnis consectetur laudantium? Voluptatibus corporis id
              mollitia, magnam est sed.
            </p>
            <img
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt=""
            />
            <button>Add to cart</button>

            <p className="legend">Слайд 7</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default CarouselContainer;
