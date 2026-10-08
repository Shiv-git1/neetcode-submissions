class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const list = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        let stack = []

        for (let char of s) {
            if (list[char]) {
                if (stack.length > 0 && stack[stack.length - 1] === list[char]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(char)
            }
        }

        return stack.length === 0
    }
}
