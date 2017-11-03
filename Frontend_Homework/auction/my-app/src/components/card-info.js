import React from 'react';
import PrimaryBtn from './primary-btn';
import _image from '../images/image_2017-10-22_13-57-03.png'

export default function CardInfo(){
    return (
          <div className="center-container">
            <div>{_image}</div>
            <div className="lot-description">
              <h3>Name of lot</h3>
              <p>Lorem ipsum dolor sit amet, id elitr delenit mei, suas malis nemore ius et.
                An sed velit quando facilisis, vis decore timeam consectetuer ad. Idque accusata eam ea.
                Postulant assueverit no vel. Per id graeco aeterno prodesset, ut fugit minim graeco has.
                No quem vero omittam sed, sea eu facete laboramus.
                Mel meis animal delicatissimi et, ex eos graeci contentiones, consul admodum honestatis id duo.
                Mea elitr molestiae temporibus cu, duis hendrerit deseruisse ea nam. Elit probatus usu at, mel
                esse persecuti ea, ne vel mundi putent tamquam. Id duo nobis possit elaboraret. At zril omittam eum,
                has no wisi veniam, dicta melius ei his. Quaeque expetenda nec ut.
              </p>
            </div>
            <div className="info">
              <p>Current price : <span>4100$</span></p>
              <p>Starting price : <span>2400$</span></p>
              <p>Time till end : <span>2:41</span></p>
              <p>Number of bets : <span>41</span></p>
              <PrimaryBtn title = "Place a bet" />
            </div>
          </div>
    );
  };