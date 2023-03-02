import React, {useContext, useState} from 'react';
import {Snackbar, IconButton, SnackbarContent} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {makeStyles} from '@material-ui/core/styles';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
  FaHackerrank,
} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import {AiOutlineSend, AiOutlineCheckCircle} from 'react-icons/ai';
import {FiPhone, FiAtSign} from 'react-icons/fi';
import {HiOutlineLocationMarker} from 'react-icons/hi';

import {ThemeContext} from '../../contexts/ThemeContext';
import emailjs from 'emailjs-com';

import {socialsData} from '../../data/socialsData';
import {contactsData} from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const {theme} = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 600,
      fontSize: '0.9rem',
      padding: '0 5px',
      transform: 'translate(25px,50%)',
      display: 'inline-flex',
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '21px',
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '23px',
      transition: '250ms ease-in-out',
      flexShrink: 0,
      '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
        transform: 'scale(1.08)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        //email sections

        emailjs
          .send(
            'service_etyv5t5',
            'template_3g7n1cg',
            responseData,
            '84Zc3jifxmB9r2Fl9'
          )
          .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setSuccess(true);
              setErrMsg('');
              setName('');
              setEmail('');
              setMessage('');
              setOpen(false);
            },
            (err) => {
              console.log('FAILED...', err);
            }
          );

        // axios.post(contactsData.sheetAPI, responseData)
        //     .then(res => {
        //         console.log('success')
        //         setSuccess(true)
        //         setErrMsg('')

        //         setName("");
        //         setEmail("");
        //         setMessage("")
        //         setOpen(false)
        //     })
      } else {
        setErrMsg('Invalid email');
        setOpen(true);
      }

      //email sections
    } else {
      setErrMsg('Enter all the fields');
      setOpen(true);
    }
  };

  return (
    <div
      className='contacts'
      id='contacts'
      style={{backgroundColor: theme.secondary}}
    >
      <div className='contacts--container'>
        <h1 style={{color: theme.primary}}>Contacts</h1>
        <div className='contacts-body'>
          <div className='contacts-form'>
            <form onSubmit={handleContactForm}>
              <div className='input-container'>
                <label htmlFor='Name' className={classes.label}>
                  Name
                </label>
                <input
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  name='Name'
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Email' className={classes.label}>
                  Email
                </label>
                <input
                  placeholder='name@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='Email'
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='Message' className={classes.label}>
                  Message
                </label>
                <textarea
                  placeholder='Type your message....'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type='text'
                  name='Message'
                  className={`form-message ${classes.message}`}
                />
              </div>

              <div className='submit-btn'>
                <button type='submit' className={classes.submitBtn}>
                  <p style={{marginTop: '15%'}}>{!success ? 'Send' : 'Sent'}</p>
                  <div className='submit-icon'>
                    <AiOutlineSend
                      className='send-icon'
                      style={{
                        animation: !success
                          ? 'initial'
                          : 'fly 0.8s linear both',
                        position: success ? 'absolute' : 'initial',
                      }}
                    />
                    <AiOutlineCheckCircle
                      className='success-icon'
                      style={{
                        display: !success ? 'none' : 'inline-flex',
                        opacity: !success ? '0' : '1',
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size='small'
                      aria-label='close'
                      color='inherit'
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize='small' />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: 'var(--primaryFont)',
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className='contacts-details'>
            <a
              href={`mailto:${contactsData.email}`}
              className='personal-details'
            >
              <div className={classes.detailsIcon}>
                <FiAtSign />
              </div>
              <p style={{color: theme.tertiary}}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className='personal-details'>
              <div className={classes.detailsIcon}>
                <FiPhone />
              </div>
              <p style={{color: theme.tertiary}}>{contactsData.phone}</p>
            </a>
            <div className='personal-details'>
              <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <p style={{color: theme.tertiary}}>{contactsData.address}</p>
            </div>

            <div className='socialmedia-icons'>
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaTwitter />
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaGithub />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn />
                </a>
              )}
              {socialsData.hackerrank && (
                <a
                  href={socialsData.hackerrank}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaHackerrank />
                </a>
              )}
              {socialsData.leetcode && (
                <a
                  href={socialsData.leetcode}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <SiLeetcode />
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaInstagram />
                </a>
              )}
              {socialsData.medium && (
                <a
                  href={socialsData.medium}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaMediumM />
                </a>
              )}
              {socialsData.blogger && (
                <a
                  href={socialsData.blogger}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaBloggerB />
                </a>
              )}
              {socialsData.youtube && (
                <a
                  href={socialsData.youtube}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaYoutube />
                </a>
              )}
              {socialsData.reddit && (
                <a
                  href={socialsData.reddit}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaRedditAlien />
                </a>
              )}
              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaStackOverflow />
                </a>
              )}
              {socialsData.codepen && (
                <a
                  href={socialsData.codepen}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaCodepen />
                </a>
              )}
              {socialsData.gitlab && (
                <a
                  href={socialsData.gitlab}
                  target='_blank'
                  rel='noreferrer'
                  className={classes.socialIcon}
                >
                  <FaGitlab />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt='contacts' className='contacts--img' />
    </div>
  );
}

export default Contacts;
