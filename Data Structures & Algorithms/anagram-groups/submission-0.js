class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (let s of strs) {
            let sortedStrs = s.split('').sort().join('')

            if (!map.has(sortedStrs)) {
                map.set(sortedStrs, [])
            }
            let list = map.get(sortedStrs)
            list.push(s)
            map.set(sortedStrs, list)
        }

        return [...map.values()]
    }
}
