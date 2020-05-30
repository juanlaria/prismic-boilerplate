import Head from 'next/head';
import PropTypes from 'prop-types';
import { objectNotEmpty } from '../../utils/helpers';
import Metadata from './metadata';
import GeneralCard from './generalCard';
import TwitterCard from './twitterCard';

const Meta = ({ metadata, social }) => {
  return (
    <>
      {objectNotEmpty(metadata) && <Metadata {...metadata} />}

      {!!social?.length &&
        social.map((card, index) => {
          switch (card.slice_type) {
            case 'general_card':
              return (
                <GeneralCard
                  canonical={metadata.canonical}
                  {...card.primary}
                  key={`social-${index}`}
                />
              );
            case 'twitter_card':
              return <TwitterCard {...card.primary} key={`social-${index}`} />;
            default:
              return false;
          }
        })}
    </>
  );
};

Meta.propTypes = {
  metadata: PropTypes.shape({}),
  social: PropTypes.arrayOf(PropTypes.shape({})),
};

Meta.defaultProps = {
  metadata: null,
  social: null,
};

export default Meta;
