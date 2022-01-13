# web

# Caveat Notice

Do not push to default branch directly, unless it is an emergency hot fix.
Make a PR and request review instead.

## Framework

Nextjs + tailwindcss.css

## Deploy

Introduce the deployment method of this project.

### Sentry Setup

NOTE: if you want to setup `Sentry`, take a look at this step, otherwise skip it.

#### Step to setup Sentry

- Copy `.env.example` as `.env.local`
- Add DSN after `NEXT_PUBLIC_SENTRY_DSN=` variable

#### Command Example

```shell
cp .env.example .env.local
```

Once the `.env.local` file is recognized by NextJS, Sentry would be automatically setup for use.

#### Environment table

| Variable               | Is required | Usage                                   |
| ---------------------- | ----------- | --------------------------------------- |
| NEXT_PUBLIC_SENTRY_DSN | required    | Sentry DSN, use in Sentry as an API url |
| SENTRY_ORG             | optional    | Sentry Orginaztion slug                 |
| SENTRY_PROJECT         | optional    | Sentry Project slug                     |
| SENTRY_AUTH_TOKEN      | optional    | Sentry auth token                       |
