import React from 'react';

import './RotateCard.scss';

// Starting with small components
// const cardContainer = document.querySelector('.react-card');

// React component for form inputs
class CardInput extends React.Component {
    render() {
        return (
            <fieldset>
                <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
            </fieldset>
        )
    }
}

// React component for textarea
class CardTextarea extends React.Component {
    render() {
        return(
            <fieldset>
                <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
            </fieldset>
        )
    }
}

// React component for form button
class CardBtn extends React.Component {
    render() {
        return(
            <fieldset>
                <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
            </fieldset>
        )
    }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];
 
        const linksList = profileLinks.map((link, index) =>
            <li key={index}><a href='epic7x.com'><i className={'fa fa-' + link}></i></a></li>
        );
 
        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    {linksList}
                </ul>
            </div>
        )
    }
}

// Creating component for the frontside
// React component for the frontside of the card
class CardFront extends React.Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src='https://epic7x.com/wp-content/uploads/2019/01/shadow-rose.png' alt="alt-name"/>
                        </div>
 
                        <div className='col-xs-6 side-front-content'>
                            <h2>Czech based</h2>
                            <h1>UI/UX Designer</h1>
                            <p>Andrey is driven by turning ideas into scalable and empowering experiences that solve real life problems.</p>
                            <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>
                            <p>Over the years, Michael has been priviledged to have worked with Adobe, Evernote, Square and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// React component for the backside of the card
class CardBack extends React.Component {
    render() {
        return(
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Let's get in touch!</h1>
  
                    <form formAction='' className='card-form'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <CardInput
                                    name='contactFirstName'
                                    id='contactFirstName'
                                    type='text'
                                    placeholder='Your first name' />
                            </div>
 
                            <div className='col-xs-6'>
                                    <CardInput
                                        name='contactLastName'
                                        id='contactLastName'
                                        type='text'
                                        placeholder='Your last name' />
                            </div>
                        </div>
 
                        <div className='row'>
                            <div className='col-xs-6'>
                                <CardInput
                                    name='contactEmail'
                                    id='contactEmail'
                                    type='email'
                                    placeholder='Your email address' />
                            </div>
 
                            <div className='col-xs-6'>
                                <CardInput
                                    name='contactSubject'
                                    id='contactSubject'
                                    type='text'
                                    placeholder='Subject' />
                            </div>
                        </div>
  
                        <CardTextarea
                            name='contactMessage'
                            id='contactMessage'
                            placeholder='Your message' />
  
                        <CardBtn
                            className='btn btn-primary'
                            type='submit'
                            value='Send message' />
                    </form>
  
                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

function RotateCard() {
  return(
      <div className='card-container'>
          <div className='card-body'>
            <CardBack />
            <CardFront />
          </div>
      </div>
  );
};

export default RotateCard;