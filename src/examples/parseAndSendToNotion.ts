import { Client } from '@notionhq/client';

import { htmlToNotionBlocks } from '../lib/parser';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

(async () => {
  const blocks = htmlToNotionBlocks(htmlStringExample());
  const response = await notion.pages.create({
    parent: {
      database_id: '80b829a4715b4f7bad51ddf85dbcf652',
    },
    properties: {
      Name: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: { content: 'test' },
          },
        ],
      },
    },
    children: blocks,
  });
  console.log(response.id);

  // --------
  function htmlStringExample() {
    return `<html>
<head>
  <base target="_blank" />
  <meta content="width=device-width" name="viewport" />

  <meta
    http-equiv="Content-Type"
    content="text/html; charset=UTF-8"
    style="
      font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
      font-color: #111111;
    "
  />
</head>
<body data-new-gr-c-s-check-loaded="8.874.0" data-gr-ext-installed="">
  <div
    class="templateHeader"
    style="
      font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
      font-color: #111111;
      background-color: #d41929;
      background-image: none;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-top: 0;
      border-bottom: 0;
      padding-top: 15px;
      padding-bottom: 15px;
    "
  >
    <h1
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        color: #111111;
        font-weight: 700;
        color: #ffffff;
        font-family: 'Sofia Pro', 'Europa', Helvetica, serif;
        font-size: 32px;
        line-height: 125%;
        text-align: center;
      "
    >
      FS | BRAIN FOOD
    </h1>
  </div>

  <!--[if mso]>
  <center>
  <table><tr><td width="580">
<![endif]-->

  <div
    class="message-content"
    style="
      max-width: 600px;
      margin: 30px auto;
      font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
      font-weight: 400;
      font-color: #111111;
      line-height: 150%;
      background-color: #ffffff;
    "
  >
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      Sunday Brain Food: a weekly newsletter full of timeless ideas and
      insights for life and business.
    </p>
    <h2
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-family: 'Sofia Pro', 'Europa', Helvetica, serif;
        color: #111111;
        font-weight: 600;
        font-size: 24px;
        line-height: 125%;
      "
    >
      FS
    </h2>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      If you want to make progress in any area, you need to be willing to give
      up your best ideas from time to time.
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      —
      <a
        href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/6qheh8hpdqv8e3co/aHR0cHM6Ly9mcy5ibG9nLzIwMjEvMDUvYWR2aWNlLWZvci15b3VuZy1zY2llbnRpc3RzLw=="
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
          color: #0875c1;
          text-decoration: underline;
        "
        url-id="1385175573"
        >Advice for Curious People</a
      >
    </p>
    <div
      class="explore"
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        background-color: #fafafa;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
      "
    >
      <h2
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-family: 'Sofia Pro', 'Europa', Helvetica, serif;
          color: #111111;
          font-weight: 600;
          font-size: 24px;
          line-height: 125%;
        "
      >
        Explore Your Curiosity
      </h2>
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      >
        ★ "Since writing is very hard and rewriting is comparatively easy and
        rather fun, I always write my scripts all the way through as fast as I
        can, the first day, if possible, putting in crap jokes and pattern
        dialogue—“Homer, I don’t want you to do that.” “Then I won’t do it.”
        Then the next day, when I get up, the script’s been written. It’s
        lousy, but it’s a script. The hard part is done. It’s like a crappy
        little elf has snuck into my office and badly done all my work for me,
        and then left with a tip of his crappy hat. All I have to do from that
        point on is fix it. So I’ve taken a very hard job, writing, and turned
        it into an easy one, rewriting, overnight. I advise all writers to do
        their scripts and other writing this way."<br
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
          "
        />
      </p>
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      >
        — John Swartzwelder, one of the most revered comedy writers of all
        time,<span
          class="redactor-invisible-space"
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
          "
        >
          <a
            href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/58hvh7h5zepd2ea6/aHR0cHM6Ly93d3cubmV3eW9ya2VyLmNvbS9jdWx0dXJlL3RoZS1uZXcteW9ya2VyLWludGVydmlldy9qb2huLXN3YXJ0endlbGRlci1zYWdlLW9mLXRoZS1zaW1wc29ucw=="
            style="
              font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
              font-color: #111111;
              font-size: 20px;
              line-height: 150%;
              color: #0875c1;
              text-decoration: underline;
            "
            url-id="1385175575"
            >on writing</a
          >.</span
        >
      </p>
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      >
        ★ "Sometimes I think we choose the things we spend our time doing just
        because of the difficulty and pain they cause us. A positive way of
        looking at this might be to say we like to “test ourselves,” while a
        more cynical view might hold that we are all, to some extent,
        magnificent self-torturers."<br
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
          "
        />
      </p>
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      >
        —
        <a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/25h2hoh7e5rpzrf3/aHR0cHM6Ly9iaWxsYW5kZGF2ZXNjb2NrdGFpbGhvdXIuY29tL3VsdGltYXRlLWdsb3J5Lw=="
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            text-decoration: underline;
          "
          url-id="1385175576"
          >Ultimate Glory</a
        >
      </p>
    </div>
    <h2
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-family: 'Sofia Pro', 'Europa', Helvetica, serif;
        color: #111111;
        font-weight: 600;
        font-size: 24px;
        line-height: 125%;
      "
    >
      Timeless Insight
    </h2>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      "It is easier to keep adding exceptions and justifications to a belief
      than to admit that a challenger has a better explanation."
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      — Zeynep Tufekci
    </p>
    <div
      class="explore"
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        background-color: #fafafa;
        background-image: none;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-top: 0;
        border-bottom: 0;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
      "
    >
      <h2
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-family: 'Sofia Pro', 'Europa', Helvetica, serif;
          color: #111111;
          font-weight: 600;
          font-size: 24px;
          line-height: 125%;
        "
      >
        Knowledge Project
      </h2>
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      >
        Tyler Cowen on
        <a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/qvh8h7h80xgm57hl/aHR0cHM6Ly9mcy5ibG9nL2tub3dsZWRnZS1wcm9qZWN0L3R5bGVyLWNvd2VuLw=="
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            text-decoration: underline;
          "
          url-id="1385175577"
          >preparing for the future</a
        >:
      </p>
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      >
        "I think the future belongs to people who are what I call
        meta-rational. That is, people who realize their own limitations. So
        not all the skills that you think are so valuable actually will matter
        in the future. Don’t just feel good about yourself, but think
        critically, what am I actually good at that will complement emerging
        sectors and emerging technologies. The world of the future, even the
        present will be a world of algorithms. ... People who think they can
        beat the algorithms will make a lot more mistakes. ... So know when
        you should defer. It’s easier than ever before to get advice from
        other people, including on podcasts, right? Or, you know, go to Yelp.
        When can you trust the advice of others? Having good judgment there is
        becoming more important than just being the smartest person or having
        the highest IQ."
      </p>
    </div>
    <h2
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-family: 'Sofia Pro', 'Europa', Helvetica, serif;
        color: #111111;
        font-weight: 600;
        font-size: 24px;
        line-height: 125%;
      "
    >
      Tiny Thought
    </h2>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      There are two types of talent: natural and chosen.
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      Natural talent needs no explanation. Some people are just born better at
      certain things than others. While natural talent may win in the short
      term, it rarely wins in the long term. A lot of people who are naturally
      talented don't develop work at getting better.
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      Eventually, naturally talented people are passed by people who choose
      talent.
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      How can you choose talent?
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      When you focus all of your energy in one direction for an uncommonly
      long period of time, you develop talent.
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      Results follow obsession.
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    ></p>
    <table
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
      "
    >
      <tbody
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
        "
      >
        <tr
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
          "
        >
          <td
            style="
              font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
              font-color: #111111;
              color: #ffffff;
              font-size: 15px;
              font-weight: bold;
              background-color: #f0b041;
              padding-top: 3px;
              padding-bottom: 3px;
              padding-right: 10px;
              padding-left: 10px;
            "
          >
            Sponsored by Royce
          </td>
        </tr>
      </tbody>
    </table>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
        text-align: center;
      "
    >
      <em
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      ></em>
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <em
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
        ><a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/g3hnh5hekv785lbr/aHR0cHM6Ly93d3cucm95Y2VpbnZlc3QuY29tLz91dG1fc291cmNlPWZhcm5hbSZ1dG1fbWVkaXVtPXdlYiZ1dG1fY2FtcGFpZ249c3BvbnNvcnNoaXA="
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            text-decoration: underline;
          "
          url-id="1385175578"
          ><img
            src="https://embed.filekitcdn.com/e/hQ3qu8vsrj2BCeYu74inyE/uTE342SakKpiYLyko2dtZL?w=800&amp;fit=max"
            style="
              font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
              font-color: #111111;
              font-size: 20px;
              line-height: 150%;
              max-width: 100%;
              display: block;
              height: auto;
              margin: 0 auto;
              width: 339px;
              height: 102px;
              display: block;
              margin: auto;
            "
            alt=""
            width="339"
            height="102" /></a
      ></em>
    </p>
    <em
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
      "
      ><br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
        "
    /></em>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
        text-align: center;
      "
    >
      <em
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
        ><a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/g3hnh5hekv785lbr/aHR0cHM6Ly93d3cucm95Y2VpbnZlc3QuY29tLz91dG1fc291cmNlPWZhcm5hbSZ1dG1fbWVkaXVtPXdlYiZ1dG1fY2FtcGFpZ249c3BvbnNvcnNoaXA="
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            text-decoration: underline;
          "
          url-id="1385175578"
          >The Royce Funds.</a
        >
        Small-cap specialist.<a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/9qhzhnhgl7kvmxs9/aHR0cHM6Ly93d3cubW9ybmluZ2JyZXcuY29tL2RhaWx5L3N1YnNjcmliZT91dG1fY2FtcGFpZ249ZmFybmFtc3RyZWV0XzA1MjAyMSZ1dG1fbWVkaXVtPW5ld3NsZXR0ZXImdXRtX3NvdXJjZT1mYXJuYW1zdHJlZXQ="
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            text-decoration: underline;
          "
          url-id="1385175579"
        ></a></em
      ><br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    ></p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      Stay safe,<br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />Shane
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <em
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
        >P.S.
        <a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/3ohphkhqnw65l9ir/aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1pZUNfNWZvRWxWaw=="
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            text-decoration: underline;
          "
          url-id="1385175580"
          >What a legend</a
        ></em
      >
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <a
        href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/e0hgprg4b7hk2x93gnc8/aHR0cHM6Ly9mcy5ibG9nL2F1dG9jbGlja2VyLw=="
        trigger-id="2335278"
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
          color: #0875c1;
          text-decoration: underline;
        "
        url-id="1385175582"
      ></a>
    </p>

    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>
    <p
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        font-size: 20px;
        line-height: 150%;
      "
    >
      <br
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
        "
      />
    </p>

    <div
      class="footer"
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        padding-top: 20px;
        padding-bottom: 30px;
        padding-right: 10px;
        padding-left: 10px;
        background-color: #fafafa;
        font-family: 'Sofia Pro';
        padding-bottom: 10px;
      "
    >
      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
          font-family: 'Sofia Pro';
          line-height: 125%;
          font-size: 14px;
        "
      >
        Overwhelmed by email? No need to unsubscribe.
        <a
          href="https://click.convertkit-mail4.com/xmu80l82m3i6h65d8pi4/6qh9kwlzs8hpdqv8gpbo/aHR0cHM6Ly9mcy5ibG9nL2JmLW1vbnRoLW9mZi8="
          trigger-id="1293290"
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            font-family: 'Sofia Pro';
            font-size: 14px;
            text-decoration: underline;
            color: #111111;
            line-height: 125%;
          "
          url-id="1385175583"
        >
          Try a 30 day break</a
        >. You won't get any emails from us for 30 days.
        <a
          href="https://preferences.convertkit-mail4.com/xmu80l82m3i6h65d8pi4"
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            font-family: 'Sofia Pro';
            font-size: 14px;
            text-decoration: underline;
            color: #111111;
            line-height: 125%;
          "
          >Update your profile</a
        >
        to change your email address or
        <a
          href="https://unsubscribe.convertkit-mail4.com/xmu80l82m3i6h65d8pi4"
          style="
            font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
            font-color: #111111;
            font-size: 20px;
            line-height: 150%;
            color: #0875c1;
            font-family: 'Sofia Pro';
            font-size: 14px;
            text-decoration: underline;
            color: #111111;
            line-height: 125%;
          "
          >unsubscribe from everything</a
        >.
      </p>

      <p
        style="
          font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
          font-color: #111111;
          font-size: 20px;
          line-height: 150%;
          font-family: 'Sofia Pro';
          line-height: 125%;
          font-size: 14px;
        "
      >
        201-854 Bank Street, Ottawa, ON K1S 3W3
      </p>
    </div>

    <!--[if mso]>
  </td></tr></table>
  </center>
<![endif]-->

    <!-- -->
    <img
      src="https://open.convertkit-mail4.com/xmu80l82m3i6h65d8pi4"
      alt=""
      style="
        font-family: 'Minion Pro', Georgia, 'Times New Roman', serif;
        font-color: #111111;
        max-width: 100%;
        display: block;
        height: auto;
        margin: 0 auto;
      "
    />
  </div>
</body>
</html>
`;
  }
})();
