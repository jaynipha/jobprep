import React from 'react'
import "./chat.css"

export default function Chat() {
      return (
            <div className='chat'>
                  <div className="chat-container ">
                        <div className="chat-header">
                              <h2>Chat</h2>
                        </div>
                        <div className="chat-messages ">
                              <div className="message_other mt-2 mb-2">

                                    <div className="message-content other">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis esse sed enim perspiciatis deleniti veniam molestias a tempore, ipsam architecto omnis soluta, obcaecati tempora expedita, ab natus consequatur qui?</p>
                                    </div>
                              </div>
                              <div className="message_mine  mt-2 mb-2">

                                    <div className="message-content mine">
                                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi laboriosam, sequi pariatur, accusamus aspernatur cupiditate optio quas facilis libero minima atque accusantium, ut natus quaerat. Quidem rerum aliquid magnam quos dolor omnis dolores reiciendis, modi quaerat, a fugit, suscipit et.</p>
                                    </div>
                              </div>
                              <div className="message_other mt-2 mb-2">

                                    <div className="message-content other">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis esse sed enim perspiciatis deleniti veniam molestias a tempore, ipsam architecto omnis soluta, obcaecati tempora expedita, ab natus consequatur qui?</p>
                                    </div>
                              </div>
                              <div className="message_mine  mt-2 mb-2">

                                    <div className="message-content mine">
                                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi laboriosam, sequi pariatur, accusamus aspernatur cupiditate optio quas facilis libero minima atque accusantium, ut natus quaerat. Quidem rerum aliquid magnam quos dolor omnis dolores reiciendis, modi quaerat, a fugit, suscipit et.</p>
                                    </div>
                              </div>


                        </div>
                        <div className="chat-input  ">
                              <input
                                    type="text"
                                    class=" form-control magic chatBox"
                                    id="exampleFormControlInput1"
                                    placeholder="Type your text here,hit enter to send"
                              />
                              {/* <button className='send'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                              </svg></button> */}
                        </div>
                  </div>


            </div>


      )
}
