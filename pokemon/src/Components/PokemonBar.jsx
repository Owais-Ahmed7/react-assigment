import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Tooltip,
} from "reactstrap";

const MealBar = ({ isBarOpen, toggleBar, data }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <React.Fragment>
      <div>
        <Offcanvas isOpen={isBarOpen} toggle={toggleBar} direction="end">
          <OffcanvasHeader className="text-danger" toggle={toggleBar}>
            {data?.name}
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className="d-flex justify-content-around flex-wrap">
              {(data?.abilities || []).map((abil, idx) => (
                <h6
                  key={idx}
                  id="ability-tooltip"
                  className="text-capitalize bg-danger text-white p-3 rounded-pill"
                >
                  {abil.ability.name}
                </h6>
              ))}
              <Tooltip
                isOpen={tooltipOpen}
                target="ability-tooltip"
                toggle={toggle}
              >
                A b i l i t y
              </Tooltip>
            </div>
            <div class="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Stats:</h4>
            {(data?.stats || []).map((stat, idx) => (
              <h6 key={idx} className="text-capitalize rounded-pill">
                {stat.stat.name}: {stat.base_stat}
              </h6>
            ))}
            <div className="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Types:</h4>
            {(data?.types || []).map((type, idx) => (
              <span key={idx} className="text-capitalize rounded-pill me-3">
                {type.type.name},
              </span>
            ))}
            <div className="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Moves:</h4>
            <div className="d-flex flex-wrap">
              {(data?.moves || []).map((move, idx) => (
                <span key={idx} className="text-capitalize rounded-pill me-3">
                  {move.move.name},
                </span>
              ))}
            </div>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </React.Fragment>
  );
};

export default MealBar;
