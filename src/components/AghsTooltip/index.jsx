import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import constants from '../constants';


const Wrapper = styled.div`
  position: relative;
  width: 300px;
  background: #131519;
  background: linear-gradient(135deg, #131519, #1f2228);
  overflow: hidden;
  border: 2px solid #27292b;

  & > div:nth-child(2) {
    position: relative;
    border-top: 1px solid #080D15;
  }
`;

const Header = styled.div`
background: linear-gradient(to right, #51565F , #303338);
position: relative;
`;

const HeaderContent = styled.div`
    position: relative;
    height: 50px;
    padding: 13px;
    white-space: nowrap;
  
    & img {
        display: inline-block;
        height: 100%;
        border: 1px solid #080D15;
    }

    & .name {
        display: inline-block;
        position: relative;
        left: 15px;
        bottom: 1px;
        height: 50px;
        width: 220px;
        font-size: ${constants.fontSizeCommon};
        text-transform: uppercase;  
        color: ${constants.primaryTextColor};
        font-weight: bold;
        text-shadow: 1px 1px black;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 50px;
        letter-spacing: 1px;
    }
`;

const HeaderBgImg = styled.img`
    position: absolute;
    transform: scale(4);
    filter: blur(15px);
    opacity: 0.4;
`;

const ShardWrapper = styled.div`
    overflow:hidden;
`

const HeaderBgImg2 = styled.div`
    position: absolute;
    left: -20px;
    height: 100%;
    width: 20%;
    background: ${({ img }) => `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${process.env.REACT_APP_IMAGE_CDN}${img}')`};
    background-color: transparent;
    background-repeat: no-repeat;
    transform: scale(2);
    filter: blur(15px);
`;


const Description = styled.div`
    position: relative;
    padding: 13px;
    color: #95a5a6;
    text-shadow: 1px 1px black;
`;


const Break = styled.div`
    margin-left: 13px;
    margin-right: 13px;
    height: 1px;
    background-color: #080D15;
`;

const AghsTooltip = ({aghs}) => (
  <Wrapper>
    <ShardWrapper id="ShardOuterWrapper1">
      <Header>
        <HeaderContent>
          <HeaderBgImg src="https://steamcdn-a.akamaihd.net/apps/dota2/images/abilities/antimage_mana_break_md.png" />
          <img id="ability-img" src="/assets/images/dota2/talent_tree.svg" alt="" />
          <div className="name">Scepter/Shard...</div>
        </HeaderContent>
      </Header>
      <Description>
        this is a description...{aghs.hero_npc_name}
        <Break />
        2nd desc (after break)
      </Description>
    </ShardWrapper>
    <ShardWrapper id="ShardOuterWraper2">
      <Header>
        <HeaderContent>
          <HeaderBgImg src="https://steamcdn-a.akamaihd.net/apps/dota2/images/abilities/antimage_mana_break_md.png" />
          <img id="ability-img" src="/assets/images/dota2/talent_tree.svg" alt="" />
          <div className="name">Scepter/Shard...{aghs.hero_npc_name}</div>
        </HeaderContent>
      </Header>
      <Description>
        this is a description...
        <Break />
        2nd desc (after break)
      </Description>
    </ShardWrapper>
  </Wrapper>
);

AghsTooltip.propTypes = {
  aghs: propTypes.shape({}).isRequired,
};

export default AghsTooltip;
