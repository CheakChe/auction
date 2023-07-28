import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SlotsColumn from './SlotsColumn/SlotsColumn';
import Notification from '../../components/Notification/Notification';
import './AucPage.scss';
import { RootState } from '../../reducers';
import PageContainer from '../../components/PageContainer/PageContainer';
import { updatePercents } from '../../services/PercentsRefMap';
import TrailersContainer from '../../components/TrailersContainer/TrailersContainer';
import AucActions from './AucActions/AucActions';
import Stopwatch from './Stopwatch/Stopwatch';

const AucPage: React.FC = () => {
  const { background } = useSelector((root: RootState) => root.aucSettings.settings);
  const { showChances } = useSelector((root: RootState) => root.aucSettings.settings);
  const { slots, searchTerm } = useSelector((root: RootState) => root.slots);

  const backgroundStyles = {
    backgroundImage: background ? `url(${background})` : '',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    if (showChances && !searchTerm) {
      updatePercents(slots);
    }
  }, [searchTerm, showChances, slots]);

  return (
    <PageContainer className="auc-container" style={backgroundStyles} maxWidth={false}>
      <div className="auc-container-column">
        <div className="auc-container-row">
          <SlotsColumn />
          <Stopwatch />
        </div>
        <AucActions />
      </div>
      <Notification />
      <TrailersContainer />
    </PageContainer>
  );
};

export default AucPage;
