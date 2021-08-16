const { ErrorHandler } = require('../../../error')

/**
 * @api {post} /isLogin isLogin
 * @apiName IsLogin
 * @apiGroup Out/account
 * @apiDescription 檢查是否有登入
 *
 * @apiSuccess (201) {String} account 登入者學號
 *
 * @apiError (403) {String} description "未登入"
 */
module.exports = (req, res, next) => {
  const session_account = req.session.loginAccount
  const session_userimage = req.session.userimage
  if (session_account)
    return res.status(200).send({ account: session_account, userimage: session_userimage })
  else throw new ErrorHandler(403, '未登入')
}
