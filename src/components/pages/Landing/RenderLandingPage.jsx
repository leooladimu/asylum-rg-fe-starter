import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import AllOfficesRoute from '../../pages/DataVisualizations/AllOfficesRoute';
import GraphsContainer from '../../pages/DataVisualizations/GraphsContainer';
import SingleOfficeRoute from '../../pages/DataVisualizations/SingleOfficeRoute';
import ViewSelect from '../../pages/DataVisualizations/ViewSelect';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Table } from '.';

// for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket put download-button next to view-more-data-button */}
      <div className="image-container">
        <img
          style={{ width: '17em', height: '10em' }}
          src={GrantRatesByOfficeImg}
          alt="Grant Rates By Office"
        />
        <img
          style={{ width: '15em', height: '13em' }}
          src={GrantRatesByNationalityImg}
          alt="Grant Rates By Nationality"
        />
        <img
          style={{ width: '17em', height: '10em' }}
          src={GrantRatesOverTimeImg}
          alt="Grant Rates Over Time"
        />
      </div>
      <div className="image-text-container">
        <h3>Search Grant Rates By Office</h3>
        <h3>Search Grant Rates By Nationality</h3>
        <h3>Search Grant Rates Over Time</h3>
      </div>
      <div className="graphs-section">
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>

          <Button
            name="download-button"
            type="default"
            style={{
              backgroundColor: '#404C4A',
              color: '#FFFFFF',
              marginLeft: '1em',
            }}
            onClick={() => history.push('/download')}
          >
            Download the Data
          </Button>
        </div>
      </div>
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      {/* Bottom Section: Add code here for the graphs section for your first ticket */}
      <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
        <div
          className="graph-info-container"
          style={{ display: 'flex', margin: '1em' }}
        >
          <div className="trump-data">
            <div className="thirty-six">
              <h1>36%</h1>
            </div>
            <p>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an avaerage 44 oercent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div className="ny-data">
            <div className="five-percent">
              <h1>5%</h1>
            </div>
            <p>
              The New York asylum office grant rate dropped 5 percent in fiscal
              year 2020.
            </p>
          </div>
          <div className="six-times">
            <div className="six">
              <h1>6x Lower</h1>
            </div>
            <p>
              Between fiscal years 2017 and 2020, the New York asylum office's
              grant rate was six rimes lower than the San Francisco asylum
              office's.
            </p>
          </div>
        </div>

        <Button
          type="default"
          style={{
            backgroundColor: '#404C4A',
            color: '#FFFFFF',
            fontFamily: 'BeatriceRegular',
          }}
          onClick={() => scrollToTop()}
        >
          Read More
        </Button>
        <p
          style={{ fontFamily: 'BeatriceRegular', fontSize: '.5em' }}
          onClick={() => scrollToTop()}
          className="back-to-top"
        >
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
