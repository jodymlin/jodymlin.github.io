import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

const styles = () => ({
    mediaWrapper: {
        width: '100%',
        maxHeight: '250px',
        overflowY: 'hidden'
    },
    media: {
        width: '100%'
    }
});

function ProjectCard({ classes, data }) {
    const { title, media, description} = data;
    return(
        <div>
            <Typography variant='h6'>{title}</Typography>
            <div className={classes.mediaWrapper}>
                <img src={media} className={classes.media}/>
            </div>
            <div>
                { description }
            </div>
        </div>
        
    )
}


ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}

export default withStyles(styles)(ProjectCard);



