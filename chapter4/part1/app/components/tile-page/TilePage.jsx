import React, { PropTypes } from 'react';
import './tile.scss';

const propTypes = {
  tiles: PropTypes.array,
};

function TilePage({ tiles}) {
  tiles =  [{
    'mainTitleName': '暖心送福利',
    'subTitleName':'陪你过寒冬',
    'iconUrl': 'http:\/\/p0.meituan.net\/jungle\/eab161b360b81644c9311ba65c8889a92485.png',
    'name': '快餐小吃',
    'mainTitleColor': '#333333',
    'subTitleColor':'#FF3F4F',
    'frameColor': '#54FF9F',
    'url': null
  }, {
    'mainTitleName': '暖心送福利1',
    'subTitleName':'陪你过寒冬1',
    'iconUrl': 'http:\/\/p1.meituan.net\/jungle\/a25a98015421771a1b6c330cc14c19656926.png',
    'name': '优选正餐',
    'mainTitleColor': '#333333',
    'subTitleColor':'#FF6633',
    'frameColor': '#4B0082',
    'url': null
  }, {
    'mainTitleName': '暖心送福利2',
    'subTitleName':'陪你过寒冬2',
    'iconUrl': 'http:\/\/p1.meituan.net\/jungle\/dce381dd38c6e83c0641fd0b2fc8f7b03013.png',
    'name': '汉堡披萨',
    'mainTitleColor': '#333333',
    'subTitleColor':'#FF7F00',
    'url': null
  }, {
    'mainTitleName': '暖心送福利',
    'subTitleName':'陪你过寒冬',
    'iconUrl': 'http:\/\/p1.meituan.net\/jungle\/dce381dd38c6e83c0641fd0b2fc8f7b03013.png',
    'name': '汉堡披萨',
    'mainTitleColor': '#333333',
    'subTitleColor':'#FF7F00',
    'url': null
  }];
  const  lists = [1, 2];
  const rightTileContent = lists.map((i) =>
    <div className='J_tile tile tile-sub' data-url={tiles[i].redirectUrl}>
    <h3 style={{"color":tiles[i].mainTitleColor}}>{tiles[i].mainTitleName}</h3>
    <div style={{"color": tiles[i].subTitleColor}} className='tile-subtitle'>
      <span style={(tiles[i].frameColor)? {"border-color":tiles[i].frameColor}:{}}>{tiles[i].subTitleName}</span></div>
    <img src={tiles[i].iconUrl}/>
  </div>);

  let content = (tiles && tiles.length > 2) ?
    (<div className='J_tiles tiles four'>
    <div className='left-tile-container'>
      <div className='J_tile tile tile-main' data-url={tiles[0].redirectUrl}>
        <h3 style={{"color": tiles[0].mainTitleColor}}>{tiles[0].mainTitleName}</h3>
        <div style={{"color": tiles[0].subTitleColor}} className='tile-subtitle center'>
          <span style={(tiles[0].frameColor)? {"border-color":tiles[0].frameColor}:{}}>{tiles[0].subTitleName}</span></div>
        <div className='center'>
          <img src={tiles[0].iconUrl}/>
        </div>
      </div>

    </div>
    <div className='right-tile-container'>
     {rightTileContent}
    </div>
  </div>) : (null);

  return (
      <div>
        {
          content
        }
      </div>
  );
}

TilePage.propTypes = propTypes;

export default TilePage;
