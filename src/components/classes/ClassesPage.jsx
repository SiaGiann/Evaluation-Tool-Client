import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import classImage from './class-image.jpg'
import { withRouter } from 'react-router'

const styles = theme => ({
  root: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 600,
  },
});

const tilesData = [
  {
    title: 'Batch #1',
    author: 'Students 10'
  },
  {
    title: 'Batch #2',
    author: 'Students 21'
  },
];

function ClassesGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tilesData.map((tile, index) => (
          <GridListTile key={index}>
            <img src={classImage} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.author}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ClassesGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ClassesGridList));
