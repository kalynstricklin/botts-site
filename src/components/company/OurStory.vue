<script setup>

</script>

<template>
  <div class="container">

    <h3 class="section-title">Our Story</h3>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div id="content">
              <ul class="timeline">
                <li class="event">
                  <p>
                    Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.
                  </p>
                </li>
                <li class="event">
                  <p>
                    Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.
                  </p>
                </li>

                <li class="event">
                  <p>
                    The Botts-Inc team is not only a world class R&D services team, and a leader in architecture and standards, but has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub, with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.timeline{
  border-left: 3px solid #d39f44;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(114,124,245, 0);
  margin: 0 auto;
  postion: relative;
  letter-spacing: 0.2px;
  line-height: 1.4em;
  font-size: 1.04em;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 40%;
}
.timeline .event{
  border-bottom: 1px dashed #e8ebf1;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

.timeline .event:last-of-type{
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}
.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #d39f44;
  box-shadow: 0 0 0 3px #d39f44;
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

.rtl .timeline {
  border-left: 0;
  text-align: right;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 3px solid #d39f44;
}

.rtl .timeline .event::before {
  left: 0;
  right: -170px;
}

.rtl .timeline .event::after {
  left: 0;
  right: -55.8px;
}

@media (max-width: 767px ){
  .timeline{
    max-width: 98%;
    padding: 25px;
  }
  .timeline .event{
    padding-top: 30px;
  }
  .timeline .event:before {
    left: 0px;
    text-align: left;
  }
  .timeline .event:after {
    left: -31.8px;
  }
}
</style>