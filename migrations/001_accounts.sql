CREATE TABLE IF NOT EXISTS players (
  id uuid PRIMARY KEY,
  username text NOT NULL,
  username_key text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS player_sessions (
  token_hash text PRIMARY KEY,
  player_id uuid NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  expires_at timestamptz NOT NULL
);
CREATE INDEX IF NOT EXISTS player_sessions_expiry ON player_sessions(expires_at);
CREATE TABLE IF NOT EXISTS player_saves (
  player_id uuid PRIMARY KEY REFERENCES players(id) ON DELETE CASCADE,
  payload jsonb,
  active_client uuid,
  revision integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE player_saves ADD COLUMN IF NOT EXISTS active_client uuid;
