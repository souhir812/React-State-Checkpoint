import React, { Component } from 'react'
import './profil.css';



class Profil extends Component {
    constructor() {
        super();
        this.state = {
            fullName:"Souhir Ben Boubaker ", 
            bio:"Actuellement étudiante en 2eme année génie biomédical spécialité systèmes électriques embarqués à L'institut Supérieur des Technologies Médicales de Tunis (ISTMT)", 
            imgSrc: "https://avatars.githubusercontent.com/u/83572834?s=400&u=e8784467bf549e0d27bb30901f5c2604a15954a4&v=4", 
            profession:" Génie Biomédical"
        }
    }
  render() {
    return (
      <div className='profilll'>
      <img src={this.state.imgSrc} alt= " profilImage " width="500" />
      <h2>{this.state.fullName}</h2>
      <p>{this.state.bio}</p>
      <h4>{this.state.profession}</h4>
      </div>
    )
  }
}
export default Profil