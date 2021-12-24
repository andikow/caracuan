import React, { Component } from "react";

import Header from './../component/header.js';
import Footer from './../component/footer.js';

class JadiAnalis extends Component {
  render() {
    return (
      <>
      <Header/>
      <div>
        <h2>JadiAnalis</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Morbi et est vitae sapien hendrerit mattis sit amet sed purus.
Nunc commodo sapien risus, eget commodo libero molestie vel.
Donec a tortor tincidunt, lacinia orci eget, feugiat leo.
Etiam volutpat molestie tempor. Mauris id eros porttitor, hendrerit odio
eget, laoreet mi. Vestibulum diam erat, scelerisque id eros nec, iaculis
pulvinar arcu. Mauris vestibulum magna vitae molestie egestas. Vestibulum
lobortis diam vel mauris rutrum, eget maximus purus lacinia. Sed et tellus
vel nibh vestibulum pretium non sit amet tortor. Nulla in mattis ligula.
Curabitur feugiat eros nec odio pretium ullamcorper.</p>
      </div>
      <Footer/>
      </>
    );
  }
}

export default JadiAnalis;
