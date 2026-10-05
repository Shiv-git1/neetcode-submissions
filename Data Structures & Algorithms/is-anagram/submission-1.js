class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const mapForS = new Map()
        const mapForT = new Map()

        for (let i = 0; i < s.length; i++) {
            let currentCountS = mapForS.get(s[i]) || 0
            let currentCountT = mapForT.get(t[i]) || 0
            mapForS.set(s[i], currentCountS + 1)
            mapForT.set(t[i], currentCountT + 1)
        }

        for (const key of mapForS.keys()) {
            if(mapForS.get(key) !== mapForT.get(key)) {
                return false
            }
        }

        return true
    }
}
