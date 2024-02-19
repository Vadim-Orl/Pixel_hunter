import GAME_DATA from '../tmp/game-data.js';
const SERVER_URL = 'http://localhost:3001';


const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(`${response.status}: ${response.statusText}`);
};
const adaptDataForServer = (resultGame) => {
    return {
        isFail: resultGame.isFail,
        resultPoints: resultGame.resultPoints,
        results: resultGame.state.results,
    };
};
const toJSON = (res) => res.json();
export default class Loader {
    static testData() {
        return GAME_DATA;
    }
    static async loadData() {
        const response = await window.fetch(`${SERVER_URL}/server`);
        const res = checkStatus(response);
        return toJSON(res);
    }
    static async loadResult() {
        const response = await window.fetch(`${SERVER_URL}/stat`);
        const res = checkStatus(response);
        return toJSON(res);
    }
    static async saveResults(data) {
        const statData = adaptDataForServer(data);
        const requestSettings = {
            body: JSON.stringify(statData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        };
        const response = await window.fetch(`${SERVER_URL}/stat`, requestSettings);
        return checkStatus(response);
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQTtBQUUzQyxNQUFNLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztBQUczQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtJQUN6QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDcEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQTtBQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxVQUF1QixFQUFFLEVBQUU7SUFDckQsT0FBTztRQUNMLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtRQUN6QixZQUFZLEVBQUUsVUFBVSxDQUFDLFlBQVk7UUFDckMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFRLEVBQStCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFHckUsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFNO0lBRWxCLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDbkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxTQUFTLENBQUMsQ0FBQztRQUM1RCxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFnQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVU7UUFDckIsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxPQUFPLENBQUMsQ0FBQztRQUMxRCxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFrQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxNQUFNLGVBQWUsR0FBRztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDOUIsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRSxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YiLCJmaWxlIjoidXRpbHMvbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdhbWVEYXRhLCBJUmVzdWx0R2FtZSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzLmpzJztcbmltcG9ydCB7IElRdWVzdE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvcXVlc3QtbW9kZWwuanMnO1xuaW1wb3J0IEdBTUVfREFUQSBmcm9tICcuLi90bXAvZ2FtZS1kYXRhLmpzJ1xuXG5jb25zdCBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG5cblxuY29uc3QgY2hlY2tTdGF0dXMgPSAocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xufVxuXG5jb25zdCBhZGFwdERhdGFGb3JTZXJ2ZXIgPSAocmVzdWx0R2FtZTogSVF1ZXN0TW9kZWwpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpc0ZhaWw6IHJlc3VsdEdhbWUuaXNGYWlsLFxuICAgIHJlc3VsdFBvaW50czogcmVzdWx0R2FtZS5yZXN1bHRQb2ludHMsXG4gICAgcmVzdWx0czogcmVzdWx0R2FtZS5zdGF0ZS5yZXN1bHRzLFxuICB9XG59XG5cbmNvbnN0IHRvSlNPTiA9IChyZXM6IGFueSk6IElHYW1lRGF0YVtdIHwgSVJlc3VsdEdhbWVbXSA9PiByZXMuanNvbigpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciB7XG5cbiAgcHVibGljIHN0YXRpYyB0ZXN0RGF0YSgpOklHYW1lRGF0YVtdIHtcbiAgICByZXR1cm4gR0FNRV9EQVRBO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGxvYWREYXRhKCk6IFByb21pc2U8SUdhbWVEYXRhW10+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChgJHtTRVJWRVJfVVJMfS9zZXJ2ZXJgKTtcbiAgICBjb25zdCByZXMgPSBjaGVja1N0YXR1cyhyZXNwb25zZSk7XG4gICAgcmV0dXJuIHRvSlNPTihyZXMpIGFzIElHYW1lRGF0YVtdO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGxvYWRSZXN1bHQoKTogUHJvbWlzZTxJUmVzdWx0R2FtZVtdPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYCR7U0VSVkVSX1VSTH0vc3RhdGApO1xuICAgIGNvbnN0IHJlcyA9IGNoZWNrU3RhdHVzKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gdG9KU09OKHJlcykgYXMgSVJlc3VsdEdhbWVbXTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBzYXZlUmVzdWx0cyhkYXRhOiBJUXVlc3RNb2RlbCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBzdGF0RGF0YSA9IGFkYXB0RGF0YUZvclNlcnZlcihkYXRhKTtcbiAgICBjb25zdCByZXF1ZXN0U2V0dGluZ3MgPSB7XG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdGF0RGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChgJHtTRVJWRVJfVVJMfS9zdGF0YCwgcmVxdWVzdFNldHRpbmdzKTtcbiAgICByZXR1cm4gY2hlY2tTdGF0dXMocmVzcG9uc2UpO1xuICB9XG59XG4iXX0=