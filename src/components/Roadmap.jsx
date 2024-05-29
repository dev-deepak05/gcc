import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Element } from 'react-scroll';
function Roadmap() {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 200,
        });
      }, [])

  return (
    <>
      <div className="roadmap-div" style={{ backgroundColor: "#FAFCFE" }} id='road-map'>
        <div className="container">
          <div className="col-md-12">
            <div className="roadmap-title text-center">
              <h2 className="title">
                {" "}
                <span className="word"> Road map</span>
              </h2>
              <p className="desc mt-5">
                WE'RE BUILDING A VIBRANT ECOSYSTEM AND YOU HAVE THE EXCLUSIVE
                OPPORTUNITY TO BE A PART OF IT FROM THE GROUND FLOOR.
              </p>
            </div>
          </div>
          <div className="col-md-12 roadmap-text mt-5">
            {/* Desktop Road map */}
            <div className="ova-road-map-advanced">
              <div class="road-map-advanced">
                <div class="timeline-row timeline-row-odd">
                  <div class="timeline-item timeline-done">
                    <div class="timeline-date">
                      <h2 class="date">January 2024</h2>
                    </div>
                    <div class="timeline-icon">
                      <div class="icon">
                        <i class="fas fa-check"></i>
                      </div>
                    </div>
                    <div data-aos="fade-up">
                    <div
                      class="timeline-content animated ova-move-up animated-slow"
                      
                    >
                      <h2 class="title">Concept</h2>
                      <ul class="content">
                        <li class="text">Concept Generation</li>
                        <li class="text">Team Assemble</li>
                      </ul>
                    </div>
                    </div>
                  </div>
                  <div class="timeline-item timeline-done">
                    <div class="timeline-date">
                      <h2 class="date">March 2024</h2>
                    </div>
                    <div class="timeline-icon">
                      <div class="icon">
                        <i class="fas fa-check"></i>
                      </div>
                    </div>
                    <div data-aos="fade-up">
                    <div
                      class="timeline-content animated ova-move-up animated-slow"
                    >
                      <h2 class="title">Research</h2>
                      <ul class="content">
                        <li class="text">Concept Generation</li>
                        <li class="text">Team Assemble</li>
                      </ul>
                    </div>
                    </div>
                  </div>
                  <div class="timeline-item timeline-done">
                    <div class="timeline-date">
                      <h2 class="date">May 2024</h2>
                    </div>
                    <div class="timeline-icon">
                      <div class="icon">
                        <i class="fas fa-check"></i>
                      </div>
                    </div>
                    <div data-aos="fade-up">
                    <div
                      class="timeline-content animated ova-move-up animated-slow"
                    >
                      <h2 class="title">Pre-Sale</h2>
                      <ul class="content">
                        <li class="text">Concept Generation</li>
                        <li class="text">Team Assemble</li>
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-row timeline-row-even">
                  <div class="timeline-item">
                    <div class="timeline-date">
                      <h2 class="date">September 2024</h2>
                    </div>
                    <div class="timeline-icon">
                      <div class="icon">
                        <i class="fas fa-check"></i>
                      </div>
                    </div>
                    <div data-aos="fade-up">
                    <div
                      class="timeline-content animated ova-move-up animated-slow"
                    >
                      <h2 class="title">Token sale</h2>
                      <ul class="content">
                        <li class="text">Concept Generation</li>
                        <li class="text">Team Assemble</li>
                      </ul>
                    </div>
                    </div>
                  </div>
                  <div class="timeline-item timeline-done-even">
                    <div class="timeline-date">
                      <h2 class="date">July 2024</h2>
                    </div>
                    <div class="timeline-icon">
                      <div class="icon">
                        <i class="fas fa-check"></i>
                      </div>
                    </div>
                    <div data-aos="fade-up">
                    <div
                      class="timeline-content animated ova-move-up animated-slow"
                    >
                      <h2 class="title">App beta test</h2>
                      <ul class="content">
                        <li class="text">Concept Generation</li>
                        <li class="text">Team Assemble</li>
                      </ul>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* Mobile Road map */}
            <div class="road-map-advanced-mobile">
              <div class="timeline-items timeline-done-mb">
                <div class="timeline-icon">
                  <div class="icon">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="timeline-info">
                  <div class="timeline-date">
                    <h2 class="date">January 2024</h2>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">Concept</h2>
                    <ul class="content">
                      <li class="text">Concept Generation</li>
                      <li class="text">Team Assemble</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="timeline-items timeline-done-mb">
                <div class="timeline-icon">
                  <div class="icon">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="timeline-info">
                  <div class="timeline-date">
                    <h2 class="date">March 2024</h2>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">Research</h2>
                    <ul class="content">
                      <li class="text">Concept Generation</li>
                      <li class="text">Team Assemble</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="timeline-items timeline-done-mb">
                <div class="timeline-icon">
                  <div class="icon">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="timeline-info">
                  <div class="timeline-date">
                    <h2 class="date">May 2024</h2>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">Pre-Sale</h2>
                    <ul class="content">
                      <li class="text">Concept Generation</li>
                      <li class="text">Team Assemble</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="timeline-items timeline_done_next_mobile">
                <div class="timeline-icon">
                  <div class="icon">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="timeline-info">
                  <div class="timeline-date">
                    <h2 class="date">July 2024</h2>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">App beta test</h2>
                    <ul class="content">
                      <li class="text">Concept Generation</li>
                      <li class="text">Team Assemble</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="timeline-items">
                <div class="timeline-icon">
                  <div class="icon">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="timeline-info">
                  <div class="timeline-date">
                    <h2 class="date">September 2024</h2>
                  </div>
                  <div class="timeline-content">
                    <h2 class="title">Token sale</h2>
                    <ul class="content">
                      <li class="text">Concept Generation</li>
                      <li class="text">Team Assemble</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
