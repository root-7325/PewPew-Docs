# PewPew (and probably PewPew 2) Docs!

Game host: `pewpew-2.appspot.com`
Port: 80

# Some structures:
 - UploadScore:
   - nickName - player nick
   - score - yes
   - time - replay time
   - hwID - replay/device ID?
   - hwClass - device OS
   - hwModel - device model
   - mapName - path to `.lua` map
   - version - game version
   - hash - uknown
 - GetScores:
   - Return leaderboard file
 - GetReplay:
   - ID - replay ID
# Replay Structure:
 - Path to `.lua` map
 - Uknown integer
 - Player ship (can use ships from PP2)
 - Uknown integer
 - Replay time (should be synced with replay data)
 - Probably replay data
# WebScore Structure:
 - File type
 - Type version
 - Path to `.lua` map
 - Player nick
 - Score
 - ReplayID
 - Uknown


## Server emulator:
 [Here.](https://github.com/root-7325/PewPew-Server-Emulator)
