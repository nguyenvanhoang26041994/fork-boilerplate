import React from 'react';
import cn from 'classnames';
import PropType from 'prop-types';
import { AvatarGroup } from 'fork-design';


const StyledAvatarGroup = ({ className, ...otherProps }) => {
  return (
    <AvatarGroup className={cn('styled-avatar-group', className)} {...otherProps} />
  );
};

StyledAvatarGroup.defaultProps = {};

export default StyledAvatarGroup;
