/**
 * MIT License
 * Copyright 2020 - IBM Corp.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions: The above copyright
 * notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const Service = require('../service');


/**
 * A class for making Factors requests.
 * @extends Service
 * @author Adam Dorogi-Kaposi <adam.dorogi-kaposi@ibm.com>
 */
class FactorService extends Service {
  /**
   * Get an email OTP factor enrollment.
   * @param {string} userId The identifier of the user for which to retrieve
   * enrolments.
   * @return {Promise<Array>} The array of enrolments for the given user.
   */
  async getEnrolments(userId) {
    const response = await this.get('/v2.0/factors',
        {search: `userId="${userId}"&enabled=true`});
    return response.data;
  }
}

module.exports = FactorService;