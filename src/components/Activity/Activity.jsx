import "./Activity.css";

function ActivityItem({ sentence, type }) {
  return (
    <>
      <div className={`activity-item ${type}`}>
        <div className="activity-indicator"></div>
        <div className="activity-content">
          <h4 className="activity-name">{sentence}</h4>
          <p className="activity-time">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Just now
          </p>
        </div>
        <div className="activity-arrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default function Activity() {
  return (
    <>
      <div className="activity-section">
        <div className="activity-header">
          <div className="activity-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <h2 className="activity-title">Recent Activity</h2>
            <p className="activity-subtitle">
              Your recent dashboard activities
            </p>
          </div>
        </div>

        <div className="activity-list">
          <ActivityItem
            sentence={"Successfully logged In"}
            type={"success"}
          ></ActivityItem>
          <ActivityItem
            sentence={"Dashboard accessed"}
            type={"info"}
          ></ActivityItem>
        </div>
      </div>
    </>
  );
}
