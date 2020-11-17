import React from "react";
import { Router, Link } from "@reach/router";

import { CreateChallenge } from "views/views";
import { Chrome, ChallengeWidget } from "components/components";

const EditRecord = ({ challengeId, recordId }) => (
  <Chrome
    title={`Edit record ${recordId} of challenge ${challengeId}`}
    links={{
      left: {
        to: "../../..",
        text: "Back",
      },
    }}
  >
    <Link to="../delete">Delete</Link>
  </Chrome>
);

const DeleteRecord = ({ challengeId, recordId }) => (
  <div>
    Delete record {recordId} of challenge {challengeId}?
    <Link to="../edit">No, go back to record</Link>
  </div>
);

const ChallengeSettings = ({ challengeId }) => (
  <Chrome
    title={`Challenge settings for ${challengeId}`}
    links={{
      left: {
        to: "..",
        text: "Back",
      },
    }}
  >
    <Link to="../delete">Delete</Link>
  </Chrome>
);

const DeleteChallenge = ({ challengeId }) => (
  <div>
    <h2>Delete challenge {challengeId}?</h2>
    <Link to="../settings">No, back to challenge</Link>
  </div>
);

const Challenge = ({ challengeId }) => (
  <Chrome
    title={`Challenge ${challengeId}`}
    links={{
      left: {
        to: "..",
        text: "Back",
      },
      right: {
        to: "settings",
        text: "Edit",
      },
    }}
  >
    <h3>Record 1</h3>
    <Link to="records/1/edit">Edit</Link>

    <h3>Record 2</h3>
    <Link to="records/2/edit">Edit</Link>

    <h3>Record 3</h3>
    <Link to="records/3/edit">Edit</Link>
  </Chrome>
);

const ChallengeRouter = ({ challengeId }) => (
  <Router className="fullSize">
    <ChallengeSettings path="settings" />
    <DeleteChallenge path="delete" />
    <EditRecord path="records/:recordId/edit" challengeId={challengeId} />
    <DeleteRecord path="records/:recordId/delete" challengeId={challengeId} />
    <Challenge path="./" default challengeId={challengeId} />
  </Router>
);

const Challenges = () => (
  <Chrome
    title="Challenges"
    links={{
      right: {
        to: "new",
        text: "New",
      },
    }}
  >
    <Link to="id1">Challenge 1</Link>
    <Link to="id2">Challenge 2</Link>
    <Link to="id3">Challenge 3</Link>
    <ChallengeWidget />
  </Chrome>
);

const ChallengesRouter = () => (
  <Router className="fullSize">
    <CreateChallenge path="new" />
    <ChallengeRouter path=":challengeId/*" />
    <Challenges path="challenges" default />
  </Router>
);

const Splash = () => (
  <p path="/">
    <Link to="challenges">Go to /challenges</Link> to see the app
  </p>
);

const App = () => (
  <Router className="fullSize">
    <ChallengesRouter path="challenges/*" />
    <Splash path="/" />
  </Router>
);

export default App;
