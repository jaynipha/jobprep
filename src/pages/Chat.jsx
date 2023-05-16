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
                              <button className='sendButton'>send</button>
                        </div>
                  </div>


            </div>
            



      )
}
