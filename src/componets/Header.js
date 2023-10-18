import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    marginLeft: "20px",
    cursor: "pointer",
    transition: "color 0.2s", 
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const scrollToSection = (section) => {
    scroll.scrollTo(section);
  };

  Events.scrollEvent.register('end', function () {
    document.body.style.backgroundColor = '#a0a0a09c';
  });

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <image src="https://z-m-scontent.fsdq2-1.fna.fbcdn.net/v/t39.30808-1/299487079_482977093831144_4190809359208606684_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=104&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=eQrS3jnycWMAX_xOEEY&_nc_ad=z-m&_nc_cid=1367&_nc_eh=30e99162cedc2a1e772ee18371421b8b&_nc_rml=0&_nc_ht=z-m-scontent.fsdq2-1.fna&oh=00_AfDWtZUPfliY7F9pxp0aBcmgpDtoXuZo5CDf7yNh8Bne5A&oe=652A7B35"/>
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.id}
            variant="body2"
            className={`${classes.toolbarLink} link`}
          >
            <ScrollLink
              activeClass="active"
              to={section.title}
              spy={true}
              smooth={true}
              offset={80}
              duration={2000}
              onClick={() => scrollToSection(section.title)}
            >
              {section.title}
            </ScrollLink>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
